<?php

class MestestsController extends KleinExtController {

    /**
     * @var \Gb\Model\Rows questionnaires de l'étudiant
     */
    protected $_aQaires;

    /**
     * @var \Gb\Model\Rows examens
     */
    protected $_aExamens;


    /**
     * @var Questionnaire le questionnaire demandé
     */
    protected $_qaire;

    /**
     * @var QuestionnaireAlinea (pour saveOne)
     */
    protected $_qaireAlinea;

    public function initialize() {
    }

    public function before($action) {
        if (!AuthController::isLogged()) {
            // n'est pas authentifié
            $this->_rs->redirect(getUrlExt("home"));
        }

        // les questionnaires de l'utilisateur en cours
        $this->_aQaires = Questionnaire::findAll(array("etudiant_id"=>AuthController::getUser("id")));
        $this->_aQaires->rel("examen");

        // les examens ouverts et publics
        $this->_aExamens = Examen::findAll(array("is_public"=>1, "is_active"=>1));

        // ne garde que les examens dont la date correspond
        $time = Gb_String::date_iso();
        $this->_aExamens = $this->_aExamens->filter(function($ex) use ($time) {
            $start = $ex->date_start;
            $end   = $ex->date_end;
            if ($start !== null && $time < $start) {
                return false;
            } elseif ($end !== null && $time > $end) {
                return false;
            }
            return true;
        });

        // vérifie que le questionnaire demandé existe et appartient à l'utilisateur courant
        if (in_array($action, array("actionOne", "actionSaveone", "actionSubmit"))) {
            $qaire_id     = $this->_rq->param("id");
            try {
                $this->_qaire = $this->_aQaires->$qaire_id;
            } catch (Gb_Exception $e) {
                  Gb_Log::logWarning($action . " questionnaire " . $qaire_id . " introuvable");
                $this->_rs->renderJSON("Questionnaire introuvable");
            }
            // fournit l'url du test
            $this->_rs->jsp->aUrls['thistst'] = getUrlExt('onetst', array("id"=>$qaire_id));
        }

        // sauvegarde d'une réponse: s'assure que l'alinéa appartient bien au questionnaire
        if (in_array($action, array("actionSaveone"))) {
            $qaire_id      = (int) $this->_rq->param("id");
            $qaireAlineaId = (int) $this->_rq->param("qaireAlineaId");
            $this->_qaireAlinea = QuestionnaireAlinea::fetch($qaireAlineaId);
            if ($qaire_id !== (int) $this->_qaireAlinea->questionnaire_id) {
                $this->_rs->renderJSON("QuestionnaireAlinea pas dans ce Questionnaire");
            }
        }

        $this->_rs->layout->current = "mestst";
        return true;
    }

    /**
     * Liste les tests publics ouverts, offre la possiblité d'en créer un nouveau
     */
    public function actionIndex() {
        Gb_Log::logInfo("mestests:index");

        $rs = $this->_rs;

        $exams = $this->_aExamens;

        $rs->jsp->aQaires  = $this->_aQaires;
        $rs->jsp->aExamens = $exams;
        $rs->jsp->aUrls['onetst'] = getUrlExt('onetst', true);
        $rs->jsp->aUrls['newtstexam'] = getUrlExt('newtstexam', true);

        $rs->render("views/mestests/liste.phtml");
    }


    /**
     * Crée un nouveau test dans l'examen précisé, si autorisé
     * Redirige vers la liste de tests
     */
    public function actionNewtstexam() {

        $examen_id = $this->_rq->param("id");
        Gb_Log::logInfo("mestests:newexamtst examen_id=$examen_id");
        try {
            $Examen = Examen::getOne($examen_id);
        } catch (Gb_Exception $e) {
            die("Impossible: examen introuvable");
        }

        $openStatus = $Examen->openStatus();

        if ($openStatus->tooSoon) {
            die("Impossible: L'examen n'est pas encore ouvert");
        } elseif ($openStatus->tooLate) {
            die("Impossible: L'examen n'est plus ouvert");
        } elseif ($openStatus->isOpen) {
            // TODO: superadmin peut quand même
            die("Impossible: examen non actif");
        }

        // charge les questionnaires que l'étudiant a passé pour cet examen
        $qaires = Questionnaire::findAll(array("etudiant_id"=>AuthController::getUser("id"), "examen_id"=>$examen_id));

        $qaires_nbStarted = $qaires->count();
        $qaires_notSubmitted = $qaires->filter(function($qaire) {
            return $qaire->score === null;
        });


        // Empêche la création d'un nouveau questionnaire si un questionnaire a déjà été commencé, mais pas fini
        if ($qaires_notSubmitted->count() > 0) {
            Gb_Log::logDebug("creation rejected: there is already an open qaire");
            $this->_rs->renderJSON("Vous ne pouvez pas créer de questionnaire, parce que un questionnaire est déjà commencé");
        }

        // Empêche la création d'un nouveau questionnaire si is_redoable=0 et qu'on questionnaire a déjà été ouvert
        // Doit appararaître après "there is already an open qaire"
        if ($Examen->is_redoable === "0" && $qaires->count() > 0) {
            // Examen ne peut pas être recommencé
            Gb_Log::logDebug("creation rejected: qaire is not redoable");
            $this->_rs->renderJSON("Vous ne pouvez pas recommencer ce questionnaire");
        }

        // Utilise le pool de questionnaires
        $pools = Qairepool::findAll(array("examen_id"=>$examen_id));
        $poolcount = $pools->count();
        $rowNumber = rand(0, $poolcount-1);  // une ligne au hasard
        $pool = $pools->index($rowNumber);
        $alineas_ids = $pool->alineas_ids; // "/140/137/132/138/152/143/136/"
        $alineas_ids = explode("/", substr($alineas_ids, 1, -1));


        // CREATION
        $this->_ap->db->beginTransaction();
        $qaire = Questionnaire::create(array(
            "examen_id"=>$examen_id,
            "etudiant_id"=>AuthController::getUser("id")
        ));
        $qaire->save(); // permet d'avoir $qaire->id
        $order = 0;
        foreach ($alineas_ids as $alinea_id) {
            $a = QuestionnaireAlinea::create(array(
                "questionnaire_id"=>$qaire->id,
                "questionalinea_id"=>$alinea_id,
                "order"=>$order++
            ));
            $a->save();
        }
        $this->_ap->db->commit();
        //$this->_ap->db->rollback();
        $this->_rs->redirect(getUrlExt("mestst"));



    }


    public function actionOne() {
        Gb_Log::logInfo("mestests:one/".$this->_rq->param("id"));
        $rs    = $this->_rs;

        $aQaireAlineas = $this->_qaire->rel("alineas");
        $rs->jsp->aQaireAlineas = $aQaireAlineas->asArray();

        $aAlineas = $aQaireAlineas->rel("questionalinea");
        $rs->jsp->aAlineas = $aAlineas->asArray();

        // récupère les contextes de chaque alinéa
        $aContexts = $aAlineas->rel('question');
        $rs->jsp->aContexts = $aContexts->asArray();

        $keepSolution = false;
        if ($this->_qaire['score']) {
            $keepSolution = true;
        }
        $this->subactionPass($keepSolution);
    }

    public function subactionPass($keepSolution=false) {
        $rs    = $this->_rs;

        // enlève la solution et le commentaire de questionAlinea et de questionnaireAlinea
        foreach ($rs->jsp->aQaireAlineas as $qaireAlineaId=>$qaireAlinea) {
            $questionAlineaId = $qaireAlinea['questionalinea_id'];
            $rs->jsp->aAlineas[$questionAlineaId]['comment'] = null;

            if (!$keepSolution) {
                $rs->jsp->aQaireAlineas[$qaireAlineaId]['solution'] = null;
                $rs->jsp->aAlineas[$questionAlineaId]['solution'] = null;
            }
        }

        $rs->layout->bodyclass = "bodypasser";

        $rs->jsp->qaire = $this->_qaire->asArray();
        $rs->render("views/mestests/passer.phtml");
    }



    /**
     * Enregistre les réponses de l'étudiant.
     * (ajax), ne renvoit rien
     */
    public function actionSaveone() {
        $rs    = $this->_rs;
        $id = $this->_rq->param("id");
        $qaireAlineaId = $this->_rq->param("qaireAlineaId");

        // $this->$_qaireAlinea remplit par before()

        $answer = $this->_rq->param("answer");
        Gb_Log::logInfo("mestests:saveone/$id: qaireAlineaId=$qaireAlineaId answer=$answer");

        $this->_qaireAlinea->answer = $answer;
        $this->_qaireAlinea->save();

        $rs->renderJSON("", 204);
    }

    /**
     * Enregistre les réponses de l'étudiant.
     * Calcule le score et le stocke dans la bdd
     * (ajax), renvoie score et les réponses
     */
    public function actionSubmit() {
        $rs    = $this->_rs;
        Gb_Log::logInfo("mestests:submit/".$this->_rq->param("id"));
        if ($this->_rq->param("submit") !== "true") {
            $rs->renderJSON("erreur non submit", 400);
        }

        $this->_qaire->computeScore();

        $this->_qaire->save();

        $ret = array();
        $ret["qaire"]         = $this->_qaire->asArray();
        $ret["aQaireAlineas"] = $this->_qaire->rel("alineas")->asArray();

        $rs->renderJSON($ret, 200);
    }

}