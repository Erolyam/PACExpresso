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
}