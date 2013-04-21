<?php
class Author extends \Gb\Model\Model {

    static $_tablename = "authors";
    static $_pk        = "id";

    static $rels = array(
        'questionnaires'=>array('reltype'=>'has_many',        'class_name'=>'Questionnaire',  'foreign_key'=>'etudiant_id'),
    );

}