<?php

class AdmStatsController extends KleinExtController {

    public function initialize() {


    }

    public function before($action) {
        if ((int) AuthController::getProfile("is_author", 0) !== 1) {
            Gb_Log::logNotice("Ungranted access to " . __CLASS__);
            $this->_rs->redirect(getUrlExt("home"));
        }

        $this->_rs->layout->current = "stats";
        return true;
    }

    public function actionIndex() {
        Gb_Log::logInfo(__CLASS__ . "->" . __METHOD__);
        $this->_rs->render("views/admin/stats/index.phtml");
    }


}

