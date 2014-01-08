<?php

class AdminController extends KleinExtController {

    public function initialize() {

        /*
        echo "<pre>";

        echo "<i>Author::getOne(2)</i><br />";
        $q = Author::getOne(2);
        echo "\$q->login=" . serialize($q->login) . "<br />";
        echo "\$q->notexistent=" . serialize($q->notexistent) . "<br />";
        echo "<b>foreach:</b> ";
        foreach ($q as $k=>$v) {
            echo "$k:$v ";
        }echo "<br />";
        echo "<b>__tostring:</b> " . $q . "<br />";
        echo "<br />";

        echo "<i>Author::getSome(array(1,2,3))</i><br />";
        $q = Author::getSome(array(1,2,3));
        echo "<b>foreach:</b><br />";
        foreach ($q as $k=>$v) {
            echo "  $k:$v<br />";
        }echo "<br />";
        echo "<b>__tostring:</b> " . $q . "<br />";
        echo "<br />";

        echo "<i>Author::getAll()</i><br />";
        $q = Author::getAll();
        echo "<b>foreach:</b><br />";
        foreach ($q as $k=>$v) {
            echo "  $k:$v<br />";
        }echo "<br />";
        echo "<b>__tostring:</b> " . $q . "<br />";
        echo "<br />";

        echo '<i>Questionnaire::getSome(array(1,2,8,9,10,11))</i><br />';
        $q = Questionnaire::getSome(array(1,2,8,9,10,11));
        echo "<b>__tostring:</b> " . $q . "<br />";
        echo "<br />";

        $r=$q->rel("etudiant")->{2};
        echo $r."\n";
        echo "\n";

        $r=$q->{9};
        echo $r."\n";
        echo $r->rel("etudiant")."\n";    // doit renvoyer {"id":"2","login":"ecavalli","created_at":"2013-04-04 10:55:56","updated_at":"2013-04-04 10:55:56"}
        echo "\n";

        $q = Questionnaire::getOne(8);
        echo $q."\n";
        echo $q->rel("etudiant");
        echo "\n";

        exit();
        */

    }

    public function before($action) {
        $login = (isset($this->_ap->auth['login'])) ? ($this->_ap->auth['login']) : ("");
        if ($login !== "ecavalli" && $login !== "gbouthen") {
            // n'a pas accès
            $this->_rs->redirect(getUrlExt("home"));
        }

        return true;
    }

    public function actionBilanhome() {
        $rs = $this->_rs;
        Gb_Log::logInfo("admin#bilanhome");

        $rs->render("views/admin/bilan/home.phtml");
    }

    public function actionBilango() {
        $type   = $this->_rq->param("type");
        $format = $this->_rq->param("format", "html");
        if ("txt" === $format) {
          $format = "text";
        }
        Gb_Log::logInfo("admin#bilango type=$type format=$format");
        $rs = $this->_rs;

        $aQaires = Questionnaire::findAll($this->_ap->db, array("score"=>new Zend_Db_Expr("IS NOT NULL")));
        $aQaireAlineas = $aQaires->rel("alineas");

        // eager load
        $aQaires->rel("etudiant");
        $aQaireAlineas->rel("questionalinea")->rel("question");

        //$log = &Gb_Db::$sqlLog;

        $aLignes = array();
        $aStats  = array();
        foreach ($aQaireAlineas as $QaireAlinea) {
            $Qaire = $QaireAlinea->rel("questionnaire");
            $user = $Qaire->rel("etudiant");
            $login = $user->login;
            $submited_at    = $Qaire->submited_at;

            $Alinea = $QaireAlinea->rel("questionalinea");
            $Question = $Alinea->rel("question");
            $alinea_id = $Alinea->id;
            $chem_num = $Alinea->chem_num;
            $title = $Question->title;
            $submited = $QaireAlinea->answer;
            $solution = $QaireAlinea->solution;

            if (!isset($aStats[$alinea_id])) {
                $aStats[$alinea_id] = array(
                    "title"        => $title. " - " . $chem_num,
                    "nbJuste"      => 0,
                    "nbFaux"       => 0,
              );
            }
            if ($submited === $solution) {
                $status = "JUSTE";
                $aStats[$alinea_id]["nbJuste"]++;
            } else {
                $status = "FAUX";
                $aStats[$alinea_id]["nbFaux"]++;
            }

            $aLigne = array(
                "etudiant"     => $login,
                "submited_at"  => $submited_at,
                "title"        => $title . " - " . $chem_num,
                "status"       => $status,
            );

          $aLignes[] = $aLigne;

        }

        if ("details" === $type) {
            $aOut = $aLignes;
        } elseif ("stats" === $type) {
            foreach ($aStats as $index=>$stat) {
                $juste    = $stat["nbJuste"];
                $faux     = $stat["nbFaux"];
                $pourcent = round($juste * 100 / ($juste + $faux));
                $aStats[$index]["pourcent"] = $pourcent;
            }
            $aOut = $aStats;
        }

        if ("csv" === $format) {
            Gb_Util::sendString(Gb_String::arrayToCsv($aOut), $type . ".csv");
        } else {
          $rs->out = Gb_String::formatTable($aOut, $format);
        }

        if ("html" === $format) {
            $rs->jsp->urlAlinea = getUrlExt("adshal", true);
            $rs->render("views/admin/bilan/${type}.phtml");
        } else {
            echo "<pre>";
            echo $rs->out;
        }

    }

    public function actionAlineashow() {
        $id = $this->_rq->param("id");
        Gb_Log::logInfo("admin#alineashow id=$id");
        $rs = $this->_rs;
        $QuestionAlinea  = QuestionAlinea::getOne($id);
        $QuestionContext = $QuestionAlinea->rel("question");

        // totaux des cases cochées:

        // recherche l'alinéa demandé dans tous les questionnaires validés
        // remplit $aSubmitted avec les reponses données

        $qaireAlineas = QuestionnaireAlinea::findAll(array("questionalinea_id"=>$id));
        $qaireAlineas->rel("questionnaire"); // eager load
        $qaireAlineas = $qaireAlineas->filter(function($qaireAlinea) {
            return $qaireAlinea->rel("questionnaire")["score"] !== null;
        });

        $aAnswers = array();
        foreach ($qaireAlineas as $qaireAlinea) {
            $answer = (int) $qaireAlinea->answer;
            $aAnswers[] = $answer;
        }
        //print_r($aSubmitted);

        // construit un tableau avec le nombre de fois où la réponse a été cochée par les étudiants:
        // $aChecked[0] = 4  -> la réponse A a été cochée 4 fois
        $aChecked = array();
        foreach ($aAnswers as $answer) {
            $index = 0; // commence par réponse A
            while ($answer>0) {
                if (($answer & 1) === 1) {
                    if (!isset($aChecked[$index])) {$aChecked[$index] = 0;}
                    $aChecked[$index]++;
                }
                $index++;
                $answer >>= 1;
            }
        }
        //print_r($aChecked);

        $obj = new stdClass();
        $obj->title    = $QuestionContext["title"];
        $obj->context  = $QuestionContext["body"];
        $obj->body     = $QuestionAlinea["body"];
        $obj->answers  = JSON_decode($QuestionAlinea["answers_json"]);
        $obj->solution = $QuestionAlinea["solution"];
        $obj->chem_num = $QuestionAlinea["chem_num"];
        $obj->count    = count($aAnswers);
        $obj->aChecked = $aChecked;
        $obj->type     = $this->_rq->param("type");
        $rs->o = $obj;

        if ("json" === $this->_rq->param("format", "html")) {
            $this->_rs->renderJSON($obj);
        } else {
            $rs->render("views/admin/alinea/show.phtml");
        }
    }
}