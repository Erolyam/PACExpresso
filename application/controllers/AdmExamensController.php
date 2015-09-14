<?php

class AdmExamensController extends KleinExtController {

    public function initialize() {


    }

    public function before($action) {
        if ((int) AuthController::getProfile("is_author", 0) !== 1) {
            Gb_Log::logNotice("Ungranted access to " . __CLASS__);
            $this->_rs->redirect(getUrlExt("home"));
        }

        $this->_rs->layout->current = "examens";
        return true;
    }

    public function actionShowMany() {
        Gb_Log::logInfo(__CLASS__ . "->" . __METHOD__);
        $examens = Examen::getAll();

        $exPoolCount = array();

        foreach ($examens as $examen) {
            # nombre de pools pour cet examen
            $count = $examen->rel("pools")->count();
            $exPoolCount[$examen->id] = $count;
        }

        $this->_rs->jsp->examens     = $examens->asArray();
        $this->_rs->jsp->exPoolCount = $exPoolCount;
        $this->_rs->jsp->urlAdexa1   = getUrlExt("adexa1", true);
        $this->_rs->render("views/admin/examens/index.phtml");
    }


    public function actionShowOne() {
        require_once("Gb/Form2.php");
        require_once("Gb/Form/Backend/GbModel.php");

        if (isset($_POST["GBFORM_id"])) {
            $id = $_POST["GBFORM_id"];
        } else {
            $id = $this->_rq->param("id");
        }

        if ((int) $id === 0) {
            $id = "new";
            $examen = Examen::create();
            $examen->author_id = AuthController::getUser("id");
        } else {
            $examen = Examen::getOne($id);
        }

        Gb_Log::logInfo(__CLASS__ . "->" . __METHOD__ . "new");
        $form = $examen->getGbForm();
        $backend = new Gb_Form_Backend_GbModel($examen);
        $form->backend($backend);
        $res = $form->process();
        if ($res===true) {
            $this->_rs->flash("Les informations ont bien été enregistrées.");
        } elseif ($res===false) {
            $this->_rs->flash("ERREUR LORS DE L'ENREGISTREMENT. VEUILLEZ NOUS CONTACTER !");
        } elseif (is_array($res)) {
            $msg = "Erreur: merci de corriger les informations suivantes:<br />";
            foreach ($res as $key=>$msg) {
                $this->_rs->flash($msg, "warn");
            }
        }

        // try {
        //     $this->_rq->validate('key', 'The key was invalid')->isLen(32);
        // } catch (ValidatorException $e) {
        //     $this->_rs->flash($e->getMessage());
        // }

        $this->_rs->examen = $examen->asArray();
        $this->_rs->gbform = $form;
        $this->_rs->urlBilan = getUrlExt("adbilh", array("id"=>$id));
        $this->_rs->render("views/admin/examens/showone.phtml");
    }


    public function actionRepool() {
        $id = $this->_rq->param("id");
        Gb_Log::logInfo(__CLASS__ . "->" . __METHOD__ . "id=$id");
        $Examen = Examen::getOne($id);
        $nbalineas = $Examen->nbalineas;

        $qDetails = $this->getQuestionsDetailsForExamen($id);

        $number = 500;
        for ($i=0; $i<$number; $i++) {
            $aQuestionIds = $this->drawQuestions($qDetails, $nbalineas);
            $qairepool = $this->createQairepool($id, $aQuestionIds);
            $qairepool->save();
        }

        echo "Ok. $number questionnaires tirés";
        Gb_Log::logNotice("Repool for examen $id: $number questionnaires tirés.");

        $this->_rs->render("views/empty.phtml");
    }


    /**
     * Renvoie un array des questions avec difficulté et nombre d'alinéas
     * @param integer $id
     * @return array("id"=>, "nbalineas"=>, "diff")
     */
    protected function getQuestionsDetailsForExamen($id) {
        $Examen = Examen::getOne($id);

        $questions = $Examen->questions_all(array("filter"=>true));

        $qDetails = array();
        foreach ($questions as $question) {
            $alineas = $question->rel("alineas");
            $alineas = $alineas->filter(function($row){
                return ($row->is_active==1) && ($row->is_validated==1); /* ne pas faire === */
            });
            $qDetails[] = array(
                "id"=>$question->id,
                "nbalineas"=>$alineas->count(),
                "diff"=>$question->difficulty
            );
        }
        return $qDetails;
    }

    /**
     * Tire des questions. N'écrit rien dans la bdd.
     * @param array $detailsQuestions
     * @param integer $nombreDemandeMin
     * @param integer[optional] $nombreDemandeMax
     * @throws Exception
     * @return array: array de questionContexts Ids
     */
    public function drawQuestions($detailsQuestions, $nombreDemandeMin, $nombreDemandeMax=null) {
        // order les alineas par chem_num
        if (null == $nombreDemandeMax) {
            $nombreDemandeMax = $nombreDemandeMin;
        }

        $nbQuestions = count($detailsQuestions);

        $aQuestionIds = array();
        $total      = 0;
        $tries      = 0;

        while($total < $nombreDemandeMin) {
            if ($tries++ > 400) {
                throw new Exception("Cannot create a new Questionnaire");
            }
            $rand = rand(0, $nbQuestions-1);
            $detailsQuestion = $detailsQuestions[$rand];

            $qWeight = $detailsQuestion["nbalineas"];
            $qId     = $detailsQuestion["id"];
            if ($total + $qWeight <= $nombreDemandeMax) {
                // la question tirée n'excède pas le total demandé
                if (!in_array($qId, $aQuestionIds)) {
                    // la question n'est pas déjà dans le questionnaire
                    $aQuestionIds[] = $qId;
                    $total += $qWeight;
                }
            }
        }

        return $aQuestionIds;
    }


    /**
     * Crée un Qairepool (n'écrit rien dans la bdd). Renvoie un nouveau Qairepool
     * Get the alineas for the questions and compute difficulty
     * @param integer $examId
     * @param array $aQuestionIds
     * @return Qairepool
     */
    protected function createQairepool($examId, $aQuestionIds) {
        $diff = 0;
        $alineasIds = array();
        foreach ($aQuestionIds as $qid) {
            $question = Question::getOne($qid);
            $alineas = $question->rel("alineas");
            foreach ($alineas as $alinea) {
                $alineasIds[] = $alinea->id;
            }
            $diff += $question->difficulty * 1000;
        }

        // difficulté moyenne par question (et non par alinéa)
        $diff = (int) ($diff / count($aQuestionIds));

        $p = array("examen_id"=>$examId, "alineas_ids" => "/" . implode("/", $alineasIds) . "/", "difficulty"=>$diff);

        $qairepool = Qairepool::create($p);

        return $qairepool;
    }


}

