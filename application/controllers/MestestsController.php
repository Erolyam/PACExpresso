<?php

require "models/Questionnaire.php";

class MestestsController extends KleinExtController {

    /**
     * @var Questionnaire
     */
    protected $_Qaire;

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
        $this->_Qaire = new Questionnaire($this->_ap->db);
        if (!isset($this->_ap->auth['id'])) {
            // n'est pas authentifié
            $this->_rs->redirect(getUrl("home"));
        }
        $this->_aQaires = $this->_Qaire->search(array("etudiant_id"=>$this->_ap->auth["id"]));

        // vérifie que le questionnaire demandé existe et appartient à l'utilisateur courant
        if (in_array($action, array("actionOne", "actionSaveone", "actionSubmit"))) {
          $qaire_id     = $this->_rq->param("id");
          $this->_qaire = $this->_Qaire->searchFirst(array("id"=>$qaire_id, "etudiant_id"=>$this->_ap->auth["id"]));
          if (!is_array($this->_qaire)) {
              $this->_rs->renderJSON("Questionnaire introuvable");
          }

          // fournit l'url du test
          $this->_rs->jsp->aUrls['thistst'] = getUrl('onetst', array("id"=>$qaire_id));
        }

        return true;
    }

    /**
     * Liste les tests ouverts, offre la possiblité d'en créer un nouveau
     */
    public function actionIndex() {
        $rs = $this->_rs;
        $canCreate = $this->canCreateNew();

        $rs->jsp->aQaires = $this->_aQaires;
        $rs->jsp->canCreate = $canCreate;
        $rs->jsp->aUrls['onetst'] = getUrl('onetst', true);
        $rs->jsp->aUrls['newtst'] = getUrl('newtst', true);
        $this->_rs->layout->current = "mestst";

        $rs->render("views/mestests/liste.phtml");
    }


    /**
     * Crée un nouveau test, si autorisé
     * Redirige vers la liste de tests
     */
    public function actionNew() {
        if (!$this->canCreateNew()) {
            $this->_rs->renderJSON("Vous ne pouvez pas créer de questionnaire, parce que un questionnaire est déjà commencé");
        }

        $aAlineas = $this->_Qaire->createNew(7);
        $newid = $this->_Qaire->saveNew($this->_ap->auth["id"], $aAlineas);
        $this->_rs->redirect(getUrl("mestst"));
    }


    public function actionOne() {
        $rs    = $this->_rs;

        $aAlinIds = json_decode($this->_qaire["questionAlineas_json"]);
        $QA = new QuestionAlinea($this->_ap->db);
        $Q = new Question($this->_ap->db);
        $aAlineas = $QA->getById($aAlinIds);
        $rs->jsp->aAlineas = $aAlineas;

        // récupère les contextes de chaque alinéa
        $aContexts = array();
        foreach ($aAlineas as $alinea) {
            $aContexts[] = (int) $alinea["question_id"];
        }
        $rs->jsp->aContexts = $Q->getById($aContexts);

        $this->subactionPass();
    }

    public function subactionPass() {
        $rs    = $this->_rs;
        $qaire = $this->_qaire;

        // enlève les solutions et le commentaire
        foreach ($rs->jsp->aAlineas as $i=>$v) {
            unset($rs->jsp->aAlineas[$i]['solutions']);
            unset($rs->jsp->aAlineas[$i]['comment']);
            //$qaire['aAlineas'][$i]['body'] = 'thebody';
            //$qaire['aAlineas'][$i]['answers'] = 'theanswers';
        }

        $rs->jsp->qaire = $qaire;
        $rs->render("views/mestests/passer.phtml");

    }



    /**
     * Enregistre les réponses de l'étudiant.
     * (ajax), ne renvoit rien
     */
    public function actionSaveone() {
        $rs    = $this->_rs;
        $this->_getEtuAnswers();
        $this->_Qaire->save($this->_qaire);

        $rs->renderJSON("", 204);
    }

    /**
     * Enregistre les réponses de l'étudiant.
     * Calcule le score et le stocke dans la bdd
     * (ajax), renvoie score et les réponses
     */
    public function actionSubmit() {
        $rs    = $this->_rs;
        $this->_getEtuAnswers();
        $this->_Qaire->computeScore($this->_qaire);

        $this->_Qaire->save($this->_qaire);

        $rs->renderJSON($this->_qaire);
    }


    /**
     * Enregistre les réponses de l'étudiant.
     * enregistre dans $this->qaire
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
    {
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