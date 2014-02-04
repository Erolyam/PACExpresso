<?php
class Examen extends \Gb\Model\Model {

    static $_tablename = "examens";
    static $_pk        = "id";

    static $rels = array(
        'author'                =>array('reltype'=>'belongs_to',            'class_name'=>'Author',         'foreign_key'=>'author_id'),
        'questionnaires'        =>array('reltype'=>'has_many',              'class_name'=>'Questionnaire',  'foreign_key'=>'examen_id'),
        'themes'                =>array('reltype'=>'belongs_to_slashed',    'class_name'=>'Theme',          'foreign_key'=>'themes_ids'),
        'questions'             =>array('reltype'=>'belongs_to_slashed',    'class_name'=>'Question',       'foreign_key'=>'questions_ids'),
        'pools'                 =>array('reltype'=>'has_many',              'class_name'=>'Qairepool',      'foreign_key'=>'examen_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;

    /**
     * renvoie les questioncontexts
     * @return \Gb\Model\Rows of Question
     */
    public function questions() {
        $slashed = $this->questions_ids;
        $expl = Gb_String::explode("/", substr($slashed, 1, strlen($slashed)-2));
        $all = Question::getSome($expl);
        return $all;
    }

    /**
     * Renvoie toutes les questions concernées par cet examen
     * éclate questions_ids, themes_ids (+pathmatch)
     * @param $params["filter"] boolean filter only valid/active questions
     * @return \Gb\Model\Rows of Question
     */
    public function questions_all($params = null) {
        if (null === $params) {
            $params = array();
        }
        $questions = $this->questions();
        $themes = $this->themes_pathmatch();
        foreach ($themes as $theme) {
            $q = $theme->rel("questions");
            $questions->append($q);
        }
        $questions = $questions->unique();

        if (isset($params["filter"]) && $params["filter"]) {
            $questions = $questions->filter(function($row) {
                return ($row->is_active==1) && ($row->is_validated==1); /* ne pas faire === */
            });
        }

        return $questions;
    }



    /**
     * renvoie les thèmes (expand themes_ids)
     * @return \Gb\Model\Rows of Theme
     */
    public function themes() {
        $slashed = $this->themes_ids;
        $aThemesIds = Gb_String::explode("/", substr($slashed, 1, strlen($slashed)-2));
        $themes = Theme::getSome($aThemesIds);
        return $themes;
    }

    /**
     * renvoie tous les thèmes (expand themes_ids and appy patchmatch)
     * @return \Gb\Model\Rows of Theme
     */
    public function themes_pathmatch() {
        $allThemes = Theme::getSome(array());

        $aThemesIds = $this->themes();
        foreach ($aThemesIds as $thisTheme) {
            $thisThemes = $thisTheme->pathmatch();
            $allThemes->append($thisThemes);
        }
        return $allThemes;
    }

    static $cols = array(
"id"              => array("typ"=>"num",        "des"=>"Numéro interne. Laisser vide pour créer un nouvel examen"),
"author_id"       => array("typ"=>"select",     "des"=>"Créateur de l'examen"),
"urlname"         => array("typ"=>"string",     "des"=>"Url courte. Permet d'accéder à l'examen sans qu'il soit visible dans la liste des examens ouverts. Pas d'espaces."),
"title"           => array("typ"=>"string",     "des"=>"Titre de l'examen, affiché dans la liste."),
"comment"         => array("typ"=>"text",       "des"=>"Commentaire. Visible par tout le monde."),
"date_start"      => array("typ"=>"datetime",   "des"=>"Si renseigné, date mini"),
"date_end"        => array("typ"=>"datetime",   "des"=>"Si renseigné, date maxi de soumission"),
"password"        => array("typ"=>"string",     "des"=>"Si renseigné, l'ouverture de l'examen demandera ce mot de passe"),
"is_public"       => array("typ"=>"enum",       "des"=>"L'examen doit être affiché dans la liste ?", "enum"=>array("0")),
"is_active"       => array("typ"=>"enum",       "des"=>"L'examen peut être passé"),
"is_redoable"     => array("typ"=>"enum",       "des"=>"Une fois terminé, peut-on repasser l'examen ?"),
"is_showsolution" => array("typ"=>"enum",       "des"=>""),
//"themes_ids"      => array("typ"=>"",           "des"=>""),
//"questions_ids"   => array("typ"=>"",           "des"=>""),
"nbalineas"       => array("typ"=>"num",        "des"=>"Nombre de questions total que doit avoir l'examen"),
"maxminutes"      => array("typ"=>"num",        "des"=>"Limite la durée qu'à l'étudiant pour répondre."),
"correction"      => array("typ"=>"enum",       "des"=>"0:aucun, pas même le total. 1:indique juste le total. 2:Montre les questions fausses. 3:Révêle la solution."),
//"created_at"      => array("typ"=>"",       "des"=>""),
//"updated_at"      => array("typ"=>"",       "des"=>""),
    );

    public function getGbForm() {
        require_once "Gb/Form2.php";
        require_once "Gb/Form/Elem/Select.php";
        require_once "Gb/Form/Elem/Text.php";
        require_once "Gb/Form/Elem/Textarea.php";

        $form = new Gb_Form2();

        $form->append(new Gb_Form_Elem_Text(    "id",               array("preInput"=>"Id: ",               "postInput"=>"Numéro interne. Laisser vide pour créer un nouvel examen")));
        $form->append(new Gb_Form_Elem_Text(    "urlname",          array("preInput"=>"Urlname: ",          "postInput"=>"Url courte. Permet d'accéder à l'examen sans qu'il soit visible dans la liste des examens ouverts. Pas d'espaces.")));
        $form->append(new Gb_Form_Elem_Text(    "title",            array("preInput"=>"Titre: ",            "postInput"=>"Titre de l'examen, affiché dans la liste.")));
        $form->append(new Gb_Form_Elem_Textarea("comment",          array("preInput"=>"Commentaire: ",      "postInput"=>"Commentaire. Visible par tout le monde.")));
        $form->append(new Gb_Form_Elem_Text(    "date_start",       array("preInput"=>"Date début: ",       "postInput"=>"Si renseigné, date mini")));
        $form->append(new Gb_Form_Elem_Text(    "date_end",         array("preInput"=>"Date fin: ",         "postInput"=>"Si renseigné, date maxi de soumission")));
        $form->append(new Gb_Form_Elem_Text(    "password",         array("preInput"=>"Mot de passe: ",     "postInput"=>"Si renseigné, l'ouverture de l'examen demandera ce mot de passe")));
        $form->append(new Gb_Form_Elem_Select(  "is_public",        array("preInput"=>"Public?:",           "postInput"=>"L'examen doit être affiché dans la liste ?",
            "args"=>array(array(null, ""), array("1", "Oui"), array("0", "Non")))));
        $form->append(new Gb_Form_Elem_Select(  "is_active",        array("preInput"=>"Actif ?",            "postInput"=>"L'examen peut être passé",
            "args"=>array(array(null, ""), array("1", "Oui"), array("0", "Non")))));
        $form->append(new Gb_Form_Elem_Select(  "is_redoable",      array("preInput"=>"Recommençable ?",    "postInput"=>"Une fois terminé, peut-on repasser l'examen ?",
            "args"=>array(array(null, ""), array("1", "Oui"), array("0", "Non")))));
        $form->append(new Gb_Form_Elem_Text(    "nbalineas",        array("preInput"=>"nbAlineas",          "postInput"=>"Nombre de questions total que doit avoir l'examen",
            "minValue"=>1, "maxValue"=>50)));
        $form->append(new Gb_Form_Elem_Text(    "maxminutes",       array("preInput"=>"Temps max",          "postInput"=>"Limite (en minutes) la durée qu'à l'étudiant pour répondre.")));
        $form->append(new Gb_Form_Elem_Select(  "correction",       array("preInput"=>"Type de correction",
            "fMandatory"=>true, "args"=>array(array('false', ""), array("0", "aucune, pas même le total"), array("1", "indique juste le total"), array("2", "montre les questions fausses"), array("3", "montre la solution")))));

        foreach ($form as $a=>$b) {
            $form->$a->value($this->$a);
        }

        return $form;
    }

}
