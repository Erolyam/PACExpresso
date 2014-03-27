<?php
require_once "Gb/Form2.php";
require_once "Gb/Form/Group.php";
require_once "Gb/Form/Elem/Select.php";
require_once "Gb/Form/Elem/Submit.php";
require_once "Gb/Form/Elem/Text.php";
require_once "Gb/Form/Elem/Textarea.php";

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

    /**
     * @return Gb_Form2
     */
    public function getGbForm() {

        $form = new Gb_Form2(array("classForm"=>"form-horizontal", "toStringRendersAs"=>"HTML"));
        $group = new Gb_Form_Group("grp1",
            array("format"=>'<div class="form-group">_LABELS__ELEMS_</div>'),
            array("javascriptEnabled"=>false, "classLabel"=>"control-label col-sm-2", "classContainer"=>"col-sm-10", "classInput"=>"form-control")
        );


        $group->append(new Gb_Form_Elem_Text(    "id",               array("label"=>"Id: ",
            "postInput"=>"Numéro interne. Laisser vide pour créer un nouvel examen",
        )));
        $group->append(new Gb_Form_Elem_Text(    "urlname",          array("label"=>"Urlname: ",
            "postInput"=>"Url courte. Permet d'accéder à l'examen sans qu'il soit visible dans la liste des examens ouverts. Pas d'espaces.",
        )));
        $group->append(new Gb_Form_Elem_Text(    "title",            array("fMandatory"=>true, "label"=>"Titre: ",
            "postInput"=>"Titre de l'examen, affiché dans la liste.",
        )));
        $group->append(new Gb_Form_Elem_Textarea("comment",          array("label"=>"Commentaire: ",
            "postInput"=>"Commentaire. Visible par tout le monde.",
        )));
        $group->append(new Gb_Form_Elem_Text(    "date_start",       array("label"=>"Date début: ",
            "postInput"=>"Si renseigné, date mini",
            "title"=>"jj/mm/aaaa hh:mm", "placeholder"=>"jj/mm/aaaa hh:mm", "regexp"=>'/[0-3][0-9]\/[0-1][0-9]\/20[1-2][0-9] [0-2][0-9]:[0-5][0-9]/',
            "fromBackendFunc"=>function($val){return substr(Gb_String::date_fr($val), 0, 16);},
            "toBackendFunc"=>function($val){if (strlen($val)==16) { return Gb_String::date_iso($val) . ":00";}},
        )));
        $group->append(new Gb_Form_Elem_Text(    "date_end",         array("label"=>"Date fin: ",
            "postInput"=>"Si renseigné, date maxi de soumission",
            "title"=>"jj/mm/aaaa hh:mm", "placeholder"=>"jj/mm/aaaa hh:mm", "regexp"=>'/[0-3][0-9]\/[0-1][0-9]\/20[1-2][0-9] [0-2][0-9]:[0-5][0-9]/',
            "fromBackendFunc"=>function($val){return substr(Gb_String::date_fr($val), 0, 16);},
            "toBackendFunc"=>function($val){if (strlen($val)==16) { return Gb_String::date_iso($val) . ":00";}},
        )));
        $group->append(new Gb_Form_Elem_Text(    "password",         array("label"=>"Mot de passe: ",
            "postInput"=>"Si renseigné, l'ouverture de l'examen demandera ce mot de passe",
        )));
        $group->append(new Gb_Form_Elem_Select(  "is_public",        array("fMandatory"=>true, "label"=>"Public?:",
            "postInput"=>"L'examen doit être affiché dans la liste ?",
            "args"=>array(array('false', ""), array("1", "Oui"), array("0", "Non"))
        )));
        $group->append(new Gb_Form_Elem_Select(  "is_active",        array("fMandatory"=>true, "label"=>"Actif ?",
            "postInput"=>"L'examen peut être passé",
            "args"=>array(array('false', ""), array("1", "Oui"), array("0", "Non"))
        )));
        $group->append(new Gb_Form_Elem_Select(  "is_redoable",      array("fMandatory"=>true, "label"=>"Recommençable ?",
            "postInput"=>"Une fois terminé, peut-on repasser l'examen ?",
            "args"=>array(array('false', ""), array("1", "Oui"), array("0", "Non"))
        )));
        $group->append(new Gb_Form_Elem_Text(    "nbalineas",        array("fMandatory"=>true, "label"=>"nbAlineas: ",
            "postInput"=>"Nombre de questions total que doit avoir l'examen",
            "minValue"=>1, "maxValue"=>50
        )));
        $group->append(new Gb_Form_Elem_Text(    "maxminutes",       array("label"=>"Temps max: ",
            "postInput"=>"Limite (en minutes) la durée qu'à l'étudiant pour répondre.",
        )));
        $group->append(new Gb_Form_Elem_Select(  "correction",       array("fMandatory"=>true, "label"=>"Type de correction: ",
            "args"=>array(array('false', ""), array("0", "aucune, pas même le total"), array("1", "indique juste le total"), array("2", "montre les questions fausses"), array("3", "montre la solution"))
        )));

        foreach ($group as $a=>$b) {
            //$group->$a->value($this->$a);
        }

        $form->append($group);

        $form->append(new Gb_Form_Elem_Submit("submit"));

        return $form;
    }

    /**
     * Renvoie -1 si pas encore ouvert
     * Renvoie 0 si ok
     * Renvoie  1 si fermé
     */
    public function date_isIntoInterval() {
        // failback
        $start = "2013-01-01 00:00:00";
        $end = "2037-12-31 23:59:59";
        if (strlen($this->date_start)>10) {
            $start = $this->date_start;
        }
        if (strlen($this->date_end)>10) {
            $end = $this->date_end;
        }
        return Gb_String::date_isIntoInterval($start, $end);
    }


    /**
     * Renvoie le statut d'ouverture de l'examen
     * @return stdClass
     *           isOpen  : boolean
     *           tooSoon : boolean
     *           tooLate : boolean
     */
    public function openStatus() {
        $status = new stdClass();
        $status->isOpen = true;
        $status->tooSoon = false;
        $status->tooLate = false;

        if ($this->is_active !== "1") {
            $status->isOpen = false;
        }
        if ($this->date_isIntoInterval() === -1) {
            $status->isOpen = false;
            $status->tooSoon = true;
        } elseif ($this->date_isIntoInterval() === 1) {
            $status->isOpen = false;
            $status->tooLate = true;
        }

        return $status;
    }


    /**
     * Renvoie le statut d'un examen pour un étudiant
     * @param integer $etudiant_id
     * @return stdClass
     *           canCreate  : boolean
     *           canResume  : boolean
     *           neverStarted:boolean
     *           resultOnly : boolean
     *           lastId     : integer
     *           nbStarted  : integer
     *           nbSubmitted: integer
     */
    public function statusForStudent($etudiant_id) {
        $examenStatus = $this->openStatus();
        $isOpen = $examenStatus->isOpen;
        $isRedoable = $this->is_redoable === "1";

        // charge les questionnaires que l'étudiant a passé pour cet examen
        $qaires = Questionnaire::findAll(array("examen_id"=>$this->id, "etudiant_id"=>$etudiant_id));
        $nbStarted = $qaires->count();
        $notSubmitted = $qaires->filter(function($qaire) {
            return $qaire->score === null;
        });
        $nbSubmitted = $nbStarted - $notSubmitted->count();
        $examen = $notSubmitted->first();

        $status = new stdClass();
        $status->canCreate    = false;
        $status->neverStarted = false;
        $status->canResume    = false;
        $status->resultOnly   = false;
        $status->lastId       = null;
        $status->nbStarted    = $nbStarted;
        $status->nbSubmitted  = $nbSubmitted;

        if ($isOpen) {
            if ($nbStarted === 0) {
                // Commencer le test pour la première fois
                $status->canCreate    = true;
                $status->neverStarted = true;
            } elseif ($isRedoable && $nbStarted === $nbSubmitted) {
                // Recommencer le test (nouveau questionnaire)
                $status->canCreate = true;
            } elseif ($isRedoable && $nbStarted > $nbSubmitted) {
                // Continuer le test commencé
                $status->canResume    = true;
                $status->lastId       = $examen->id;
            } elseif (!$isRedoable && $nbSubmitted > 0) {
                // Résultats de ce test (ne peut plus être refait parce que déjà fait)
                $status->lastId       = $examen->id;
                $status->resultOnly   = true;
            }
        } else {
            if ($nbSubmitted > 0) {
                // Résultats de cet ancien test (ne peut plus être refait, parce que fermé)
                $status->lastId       = $examen->id;
                $status->resultOnly   = true;
            } else {
                $status->neverStarted = true;
            }
        }

        return $status;
    }


}
