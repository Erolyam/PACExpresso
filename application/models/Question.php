<?php
class Question extends \Gb\Model\Model {

    static $_tablename = "questioncontexts";
    static $_pk        = "id";

    static $rels = array(
        'author'        =>array('reltype'=>'belongs_to',      'class_name'=>'Author',         'foreign_key'=>'author_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

    public static function getNbAlineasPerQuestion($theme_id=0) {
        // construit un array(questioncontext_id=>question_alineas.length)
        $aNbAlineasPerQuestion = array();
        $questions = self::findAll(array("is_validated"=>1, "is_active"=>1, "theme_id"=>$theme_id));
        foreach ($questions as $question) {
            $id    = $question->id;
    //        $title = $question->title;
            $question_alineas = QuestionAlinea::findAll(array("questioncontext_id"=>$id));
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