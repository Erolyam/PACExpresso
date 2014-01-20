<?php
class Qairepools extends \Gb\Model\Model {

    static $_tablename = "qairepools";
    static $_pk        = "id";

    static $rels = array(
        'examen'                =>array('reltype'=>'belongs_to',            'class_name'=>'Examen',         'foreign_key'=>'examen_id'),
        'alineas'               =>array('reltype'=>'belongs_to_slashed',    'class_name'=>'QuestionAlinea', 'foreign_key'=>'alineas_ids'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}