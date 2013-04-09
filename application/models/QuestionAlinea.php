<?php
require_once "lib/Model.php";

class QuestionAlinea extends Model {

    public function __construct($db) {
        parent::__construct("question_alineas", $db);
    }

}