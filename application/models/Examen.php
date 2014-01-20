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
     * @return \Gb\Model\Rows of Question
     */
    public function questions_all() {
        $questions = $this->questions();
        $themes = $this->themes_pathmatch();
        foreach ($themes as $theme) {
            $q = $theme->rel("questions");
            $questions->append($q);
        }
        $questions->unique();
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


}