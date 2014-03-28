<?php
class Userprofile extends \Gb\Model\Model {

    static $_tablename = "userprofiles";
    static $_pk        = "id";

    static $rels = array(
        'users'=>array('reltype'=>'has_many',        'class_name'=>'User',  'foreign_key'=>'userprofile_id'   ),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

}