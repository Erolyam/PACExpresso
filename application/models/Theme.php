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

    public function pathmatch() {
        $ref_id = $this->referentiel_id;
        $path = $this->path;
        if ($path === null) {
            $path = "";
        }
        if (strlen($path) > 0) {
            $path .= " // ";
        }

        $children = Theme::findAll(array("referentiel_id"=>$ref_id, "path" => new Zend_Db_Expr("LIKE '". $path . "%'")));

        $children->prepend($this);

        return $children;
    }

}