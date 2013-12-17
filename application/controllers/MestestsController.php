<?php

class MestestsController extends KleinExtController {

    /**
     * @var array questionnaires de l'étudiant
     */
    protected $_aQaires;

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
        if (!isset($this->_ap->auth['id'])) {
            // n'est pas authentifié
            $this->_rs->redirect(getUrlExt("home"));
        }
        $this->_aQaires = Questionnaire::findAll(array("etudiant_id"=>$this->_ap->auth["id"]));

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

        return true;
    }

    /**
     * Liste les tests ouverts, offre la possiblité d'en créer un nouveau
     */
    public function actionIndex() {
        Gb_Log::logInfo("mestests:index");

        $rs = $this->_rs;
        $canCreate = $this->canCreateNew();

        $rs->jsp->aQaires = $this->_aQaires;
        $rs->jsp->canCreate = $canCreate;
        $rs->jsp->aUrls['onetst'] = getUrlExt('onetst', true);
        $rs->jsp->aUrls['newtst'] = getUrlExt('newtst', true);
        $this->_rs->layout->current = "mestst";

        $rs->render("views/mestests/liste.phtml");
    }


    /**
     * Crée un nouveau test, si autorisé
     * Redirige vers la liste de tests
     */
    public function actionNew() {
        Gb_Log::logInfo("mestests:new");
        if (!$this->canCreateNew()) {
            Gb_Log::logWarning("creation rejetée");
            $this->_rs->renderJSON("Vous ne pouvez pas créer de questionnaire, parce que un questionnaire est déjà commencé");
        }

        $qaire = Questionnaire::create();

        $aAlineas = $qaire->createNew(7);

        $qaire->etudiant_id = $this->_ap->auth["id"];

        $this->_ap->db->beginTransaction();
        $qaire->save();
        foreach ($aAlineas as $order=>$questionalinea_id) {
            $a = QuestionnaireAlinea::create(array("questionnaire_id"=>$qaire->id, "questionalinea_id"=>$questionalinea_id, "order"=>$order));
            $a->save();
        }
        $this->_ap->db->commit();
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


    // *********************************
    // *********************************
    // *********************************


    /**
     * Vérifie si l'étudiant peut demander un nouveau questionnaire
     * @return boolean
     */
    protected function canCreateNew()
    {return true;
        $rs = $this->_rs;
        $fCanCreate = true;
        foreach ($this->_aQaires as $aQaire) {
            if (null === $aQaire["score"]) {
                $fCanCreate = false; break;
            }
        }
        return $fCanCreate;
    }

}