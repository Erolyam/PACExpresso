<?php
class DefaultController extends KleinExtController {

    public function actionRoot() {
        $rs = $this->_rs;
        $rs->urlMestests = getUrl("mestst");
        $rs->render("views/root.phtml");
    }

}