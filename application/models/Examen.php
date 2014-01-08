<?php
class Examen extends \Gb\Model\Model {

    static $_tablename = "examens";
    static $_pk        = "id";

    static $rels = array(
        'author'                =>array('reltype'=>'belongs_to',            'class_name'=>'Author',         'foreign_key'=>'author_id'),
        'questionnaires'        =>array('reltype'=>'has_many',              'class_name'=>'Questionnaire',  'foreign_key'=>'examen_id'),
        'themes'                =>array('reltype'=>'belongs_to_slashed',    'class_name'=>'Theme',          'foreign_key'=>'themes_ids'),
        'questions'             =>array('reltype'=>'belongs_to_slashed',    'class_name'=>'Question',       'foreign_key'=>'questions_ids'),
    );

    static $_buffer = array();

}