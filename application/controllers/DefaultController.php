<?php
class DefaultController extends KleinExtController {

    public function actionRoot() {
        $this->_rs->render("views/root.phtml");
    }

}