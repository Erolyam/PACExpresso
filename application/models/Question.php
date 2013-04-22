<?php
class Question extends \Gb\Model\Model {

    static $_tablename = "questions";
    static $_pk        = "id";

    static $rels = array(
        'author'        =>array('reltype'=>'belongs_to',      'class_name'=>'Author',         'foreign_key'=>'author_id'),
    );

    static $_buffer = array();

    public static function getNbAlineasPerQuestion() {
        // construit un array(question_id=>question_alineas.length)
        $aNbAlineasPerQuestion = array();
        $questions = self::findAll(array("isValidated"=>1, "isActive"=>1));
        foreach ($questions as $question) {
            $id    = $question->id;
    //        $title = $question->title;
            $question_alineas = QuestionAlinea::findAll(array("question_id"=>$id));
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