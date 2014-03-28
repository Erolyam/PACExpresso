<?php
class QuestionAlinea extends \Gb\Model\Model {

    static $_tablename = "questionalineas";
    static $_pk        = "id";

    static $rels = array(
        'question'              =>array('reltype'=>'belongs_to',    'class_name'=>'Question' ,              'foreign_key'=>'questioncontext_id'),
        'author'                =>array('reltype'=>'belongs_to',    'class_name'=>'Author',                 'foreign_key'=>'author_id'),
        'questionnairealineas'  =>array('reltype'=>'has_many',      'class_name'=>'QuestionnaireAlinea',    'foreign_key'=>'questionalinea_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}