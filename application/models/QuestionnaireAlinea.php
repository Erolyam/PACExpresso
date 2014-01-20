<?php
class QuestionnaireAlinea extends \Gb\Model\Model {

    static $_tablename = "questionnairealineas";
    static $_pk        = "id";

    static $rels = array(
        'questionnaire'  =>array('reltype'=>'belongs_to',      'class_name'=>'Questionnaire',  'foreign_key'=>'questionnaire_id'),
        'questionalinea' =>array('reltype'=>'belongs_to',      'class_name'=>'QuestionAlinea', 'foreign_key'=>'questionalinea_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}