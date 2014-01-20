<?php
class Referentiel extends \Gb\Model\Model {

    static $_tablename = "referentiels";
    static $_pk        = "id";

    static $rels = array(
        'themes' =>         array('reltype'=>'has_many',        'class_name'=>'Theme',      'foreign_key'=>'theme_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}