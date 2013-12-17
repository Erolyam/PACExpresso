<?php
class User extends \Gb\Model\Model {

    static $_tablename = "users";
    static $_pk        = "id";

    static $rels = array(
        'questionnaires'=>array('reltype'=>'has_many',        'class_name'=>'Questionnaire',  'foreign_key'=>'etudiant_id'   ),
        'profile'       =>array('reltype'=>'belongs_to',      'class_name'=>'Userprofile',    'foreign_key'=>'userprofile_id'),
    );

    static $_buffer = array();
}