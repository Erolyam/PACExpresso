<?php
require_once "Gb/String.php";

class Questionnaire extends \Gb\Model\Model {

    static $_tablename = "questionnaires";
    static $_pk        = "id";

    static $rels = array(
        'etudiant'      =>array('reltype'=>'belongs_to',    'class_name'=>'User',                 'foreign_key'=>'etudiant_id'),
        'alineas'       =>array('reltype'=>'has_many',      'class_name'=>'QuestionnaireAlinea',  'foreign_key'=>'questionnaire_id'),
        'examen'        =>array('reltype'=>'belongs_to',    'class_name'=>'Examen',               'foreign_key'=>'examen_id'),
    );

    static $_buffer = array();
    static $_isFullyLoaded = false;


    /**
     * Calcule le score
     * remplit 'score' et 'submited_at'
     * sauve les solution pour chaque alinea
     * @param array[modified] $qaire
     * @return Questionnaire
     */
    public function computeScore() {
        /*
            $this->o : Array(
              [id] => 2
              [etudiant_id] => 1
              [submited_at] =>
              [score] =>
              [created_at] => 2013-04-01 16:55:10
              [updated_at] => 2013-04-03 12:06:44
            )
        */

        $aQaireAlineas    = $this->rel("alineas");
        $aQuestionAlineas = $aQaireAlineas->rel("questionalinea");

        $score      = 0;
        $scoremax   = 0;

        $ids = $aQaireAlineas->pluck("id");

        foreach ($ids as $id) {
            $qaireAlinea    = $aQaireAlineas[$id];
            $questionAlinea = $aQuestionAlineas[$qaireAlinea->questionalinea_id];
            $etuAnswer = (int) $qaireAlinea->answer;
            $solution = (int) $questionAlinea->solution;

            // save the solution (cache the solution)
            $qaireAlinea->solution = $solution;
            $qaireAlinea->save();

            if ($solution == $etuAnswer) {
              $score++;
            }

            $scoremax++;
        }

        $this->score         = $score . "/" . $scoremax;
        $this->submited_at   = Gb_String::date_iso();

        return $this;
    }
}
