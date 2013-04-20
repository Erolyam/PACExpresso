<?php
class Question extends \Gb\Model\Model {

    static $_tablename = "questions";
    static $_pk        = "id";

    public function getNbAlineasPerQuestion() {
        // construit un array(question_id=>question_alineas.length)
        $aNbAlineasPerQuestion = array();
        $questions = $this->search(array("isValidated"=>1, "isActive"=>1));
        $QA = new QuestionAlinea($this->adapter());
        foreach ($questions as $question) {
            $id    = $question["id"];
    //        $title = $question["title"];
            $question_alineas = $QA->search(array("question_id"=>$id));
            $count = count($question_alineas);
    //        echo "$id $title: $count<br />";
            if ($count) {
                // ne prend en compte que les questions qui ont au moins 1 alinea
                $aNbAlineasPerQuestion[$id] = $count;
            }
        }

        return $aNbAlineasPerQuestion;
    }

}