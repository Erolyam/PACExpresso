<?php

require "models/Question.php";
require "models/Questionnaire.php";
require "models/QuestionAlinea.php";
require "models/Author.php";

class MestestsController extends KleinExtController {

    /**
     * @var array questionnaires de l'étudiant
     */
    protected $_aQaires;

    /**
     * @var array le questionnaire demandé
     */
    protected $_qaire;

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
        $qaire->questionAlineas_json = JSON_encode($aAlineas);

        $qaire->save();
        $this->_rs->redirect(getUrlExt("mestst"));
    }


    public function actionOne() {
        Gb_Log::logInfo("mestests:one/".$this->_rq->param("id"));
        $rs    = $this->_rs;

        $aAlineas = $this->_qaire->rel("alineas");
        $rs->jsp->aAlineas = $aAlineas->asArray();

        // récupère les contextes de chaque alinéa
        $aContexts = $aAlineas->rel('question');
        $rs->jsp->aContexts = $aContexts->asArray();

        $this->subactionPass();
    }

    public function subactionPass() {
        $rs    = $this->_rs;

        // enlève les solutions et le commentaire
        foreach ($rs->jsp->aAlineas as $i=>$v) {
            unset($rs->jsp->aAlineas[$i]['solutions']);
            unset($rs->jsp->aAlineas[$i]['comment']);
            //$qaire['aAlineas'][$i]['body'] = 'thebody';
            //$qaire['aAlineas'][$i]['answers'] = 'theanswers';
        }

        $rs->jsp->qaire = $this->_qaire->asArray();
        $rs->render("views/mestests/passer.phtml");

    }



    /**
     * Enregistre les réponses de l'étudiant.
     * (ajax), ne renvoit rien
     */
    public function actionSaveone() {
        Gb_Log::logInfo("mestests:saveone/".$this->_rq->param("id").": ".$this->_rq->param("values", ""));

        $rs    = $this->_rs;
        $this->_getEtuAnswers();
        $this->_qaire->save();

        $rs->renderJSON("", 204);
    }

    /**
     * Enregistre les réponses de l'étudiant.
     * Calcule le score et le stocke dans la bdd
     * (ajax), renvoie score et les réponses
     */
    public function actionSubmit() {
        Gb_Log::logInfo("mestests:submit/".$this->_rq->param("id").": ".$this->_rq->param("values", ""));
        $rs    = $this->_rs;
        $this->_getEtuAnswers();
        $this->_qaire->computeScore();

        $this->_qaire->save();

        $rs->renderJSON($this->_qaire->asArray());
    }


    /**
     * Enregistre les réponses de l'étudiant.
     * enregistre dans $this->_qaire
     */
    protected function _getEtuAnswers() {
        $values = $this->_rq->param("values", "");
        if (0 === strlen($values)) {
            $this->_rs->renderJSON("values est vide");
        }
        $values = json_decode($values);
        if (!is_array($values) || count($values)<2) {
            $this->_rs->renderJSON("values est vide");
        }
        $this->_qaire['submited_data_json'] = json_encode($values);
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