<?php
require_once "lib/Model.php";

class QuestionAlinea extends Model {

    public function __construct($db) {
        parent::__construct("question_alineas", $db);
    }

    //public function getAlineasForQuestion($question_id) {
    //    $res = $this->adapter()->retrieve_all("SELECT * from {$this->_tablename} WHERE question_id=?", $question_id);
    //    return $res;
    //}
}