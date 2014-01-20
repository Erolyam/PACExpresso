<?php

class AdmExamensController extends KleinExtController {

    public function initialize() {


    }

    public function before($action) {
        $login = (isset($this->_ap->auth['login'])) ? ($this->_ap->auth['login']) : ("");
        if ($login !== "ecavalli" && $login !== "gbouthen") {
            // n'a pas accès
            $this->_rs->redirect(getUrlExt("home"));
        }

        return true;
    }

    public function actionShow() {
        $examens = Examen::getAll();
        $pools = $examens->rel("pools");

        $exPoolCount = array();

        foreach ($examens as $examen) {
            # nombre de pools pour cet examen
            $count = $examen->rel("pools")->count();
            $exPoolCount[$examen->id] = $count;
        }

        $this->_rs->jsp->examens     = $examens->asArray();
        $this->_rs->jsp->exPoolCount = $exPoolCount;
        $this->_rs->render("views/admin/examens/index.phtml");

    }

    public function actionRepool() {
        $id = $this->_rq->param("id");
        $Examen = Examen::getOne($id);
        echo $Examen;

        $slashed = $Examen->questions_ids;
        $aQuestionsIds = Gb_String::explode("/", substr($slashed, 1, strlen($slashed)-2));

        $themes = $Examen->questions_all();

        print_r($themes);
    }
}