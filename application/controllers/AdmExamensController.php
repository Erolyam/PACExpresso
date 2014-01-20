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
        $this->_rs->jsp->examens = $examens->asArray();
        $this->_rs->render("views/admin/examens/index.phtml");

    }
}