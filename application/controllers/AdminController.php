<?php

require "models/Question.php";
require "models/Questionnaire.php";
require "models/QuestionAlinea.php";
require "models/Author.php";

class AdminController extends KleinExtController {

    /**
     * @var Questionnaire
     */
    protected $_Qaire;
    /**
     * @var QuestionAlinea
     */
    protected $_QAlinea;
    /**
     * @var Question
     */
    protected $_Q;
    /**
     * @var Author
     */
    protected $_Author;

    public function initialize() {

        \Gb\Model\Model::setAdapter($this->_ap->db);

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

        $aQaires = Questionnaire::getAll($this->_ap->db);

        $aLignes = array();
        $aStats  = array();
        foreach ($aQaires as $Qaire) {
            $etudiant_id    = $Qaire->etudiant_id;
            $pourcent          = $Qaire->score;
            if ($pourcent === NULL) {
              // non terminé
              continue;
            }
            $Author         = Author::getOne($etudiant_id);
            $login          = $Author->login;
            $Aalineas       = JSON_decode($Qaire->questionAlineas_json);
            $aSubmited_data = JSON_decode($Qaire->submited_data_json);
            $aSolutions     = JSON_decode($Qaire->solution_json);
            $submited_at    = $Qaire->submited_at;
            foreach ($Aalineas as $index=>$alinea_id) {
                $Alinea      = QuestionAlinea::getOne($alinea_id);
                $question_id = $Alinea->question_id;
                $chemNum     = $Alinea->chemNum;
                $Question    = Question::getOne($question_id);
                $title       = $Question->title;
                $submited    = $aSubmited_data[$index];
                $solution    = $aSolutions[$index];

                if (!isset($aStats[$alinea_id])) {
                    $aStats[$alinea_id] = array(
                        "title"        => $title. " - " . $chemNum,
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
                    "title"        => $title . " - " . $chemNum,
                    "status"       => $status,
//                    "submited"     => $submited,
//                    "solution"     => $solution,
                );

              //print_r($aLigne);
              $aLignes[] = $aLigne;

            }
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

        $Alinea      = $this->_QAlinea->getById($id);
        $question_id = $Alinea["question_id"];
        $Question    = $this->_Q->getById($question_id);

        $rs->title    = $Question["title"];
        $rs->context  = $Question["context"];
        $rs->body     = $Alinea["body"];
        $rs->answers  = JSON_decode($Alinea["answers"]);
        $rs->solution = JSON_decode($Alinea["solutions"]);
        $rs->solution = $rs->solution[0];
        $rs->chemNum  = $Alinea["chemNum"];

        $rs->render("views/admin/alinea/show.phtml");
    }
}