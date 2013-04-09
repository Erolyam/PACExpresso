<?php

require "models/Questionnaire.php";
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
        $this->_Qaire   = new Questionnaire($this->_ap->db);
        $this->_QAlinea = new QuestionAlinea($this->_ap->db);
        $this->_Q       = new Question($this->_ap->db);
        $this->_Author  = new Author($this->_ap->db);
    }

    public function before($action) {
        $login = (isset($this->_ap->auth['login'])) ? ($this->_ap->auth['login']) : ("");
        if ($login !== "ecavalli" && $login !== "gbouthen") {
            // n'a pas accès
            $this->_rs->redirect(getUrl("home"));
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
        $format = $this->_rq->param("format", html);
        if ("txt" === $format) {
          $format = "text";
        }
        Gb_Log::logInfo("admin#bilango type=$type format=$format");
        $rs = $this->_rs;

        $aQaires = $this->_Qaire->search();
        echo "<pre>";

        $aLignes = array();
        $aStats  = array();
        foreach ($aQaires as $Qaire) {
            $etudiant_id    = $Qaire["etudiant_id"];
            $score          = $Qaire["score"];
            if ($score === NULL) {
              // non terminé
              continue;
            }
            $Author         = $this->_Author->getById($etudiant_id);
            $login          = $Author["login"];
            $Aalineas       = JSON_decode($Qaire["questionAlineas_json"]);
            $aSubmited_data = JSON_decode($Qaire["submited_data_json"]);
            $aSolutions     = JSON_decode($Qaire["solution_json"]);
            $submited_at    = $Qaire["submited_at"];
            foreach ($Aalineas as $index=>$alinea_id) {
                $Alinea      = $this->_QAlinea->getById($alinea_id);
                $question_id = $Alinea["question_id"];
                $chemNum     = $Alinea["chemNum"];
                $Question    = $this->_Q->getById($question_id);
                $title       = $Question["title"];
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
                $juste = $stat["nbJuste"];
                $faux  = $stat["nbFaux"];
                $score = round($juste * 100 / ($juste + $faux));
                $aStats[$index]["score"] = $score;
            }
            $aOut = $aStats;
        }

        if ("csv" === $format) {
            Gb_Util::sendString(Gb_String::arrayToCsv($aOut), $type . ".csv");
        } else {
          echo Gb_String::formatTable($aOut, $format);
        }

    }

}