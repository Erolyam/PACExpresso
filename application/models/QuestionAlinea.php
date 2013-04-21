<?php
class QuestionAlinea extends \Gb\Model\Model {

    static $_tablename = "question_alineas";
    static $_pk        = "id";

    static $rels = array(
        'question'      =>array('reltype'=>'belongs_to',      'class_name'=>'Question' ,      'foreign_key'=>'question_id'),
        'author'        =>array('reltype'=>'belongs_to',      'class_name'=>'Author',         'foreign_key'=>'author_id'),
    );

}