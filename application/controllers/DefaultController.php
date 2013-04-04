<?php
class DefaultController extends KleinExtController {

    public function actionRoot() {
        Gb_Log::logInfo(__FUNCTION__);
        $rs = $this->_rs;
        $rs->urlMestests = getUrl("mestst");
        $rs->layout->current = "home";
        $rs->render("views/root.phtml");
    }

}