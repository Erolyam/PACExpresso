<?php
class Theme extends \Gb\Model\Model {

    static $_tablename = "themes";
    static $_pk        = "id";

    static $rels = array(
        'referentiel' =>    array('reltype'=>'belongs_to',      'class_name'=>'Referentiel',    'foreign_key'=>'referentiel_id'),
        'questions' =>      array('reltype'=>'has_many',        'class_name'=>'Question',       'foreign_key'=>'theme_id'   ),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}