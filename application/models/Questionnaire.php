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
     * Tire des questions. N'écrit rien dans la bdd
     * @todo mettre dans un controlleur, ou lib, pas dans model !
     * @param integer $nombreDemandeMin
     * @param integer[optional] $nombreDemandeMax
     * @throws Exception
     * @return array: array de questionAlineas
     */
    public function createNew($nombreDemandeMin, $nombreDemandeMax=null, $theme_id=null) {
        // todo : rajouter validated/active aux alineas
        // order les alineas par chem_num
        if (null == $nombreDemandeMax) {
            $nombreDemandeMax = $nombreDemandeMin;
        }

        // récupère le nombre d'alinéas par question
        $aNbAlineasPerQuestion = Question::getNbAlineasPerQuestion($theme_id);
        $nbQuestions           = count($aNbAlineasPerQuestion);
        //print_r($aNbAlineasPerQuestion);

        $aQuestions = array();
        $total      = 0;
        $tries      = 0;

        while($total < $nombreDemandeMin) {
            if ($tries++ > 100) {
                throw new Exception("Cannot create Questionnaire");
            }
            $rand = rand(0, $nbQuestions-1);
            $qNum    = array_keys($aNbAlineasPerQuestion);
            $qNum    = $qNum[$rand];
            $qWeight = $aNbAlineasPerQuestion[$qNum];
            if ($total + $qWeight <= $nombreDemandeMax) {
                // la question tirée n'excède pas le total demandé
                if (!in_array($qNum, $aQuestions)) {
                    // la question n'est pas déjà dans le questionnaire
                    $aQuestions[] = $qNum;
                    $total += $qWeight;
                }
            }
        }
        //echo "total : $total\n";
        //echo "questions: ";
        //print_r($aQuestions);

        // convertit la liste de question en liste de questionAlineas
        // TODO : order by chem_num
        $aAlineas = array();
        foreach ($aQuestions as $question_id) {
            $alineas = QuestionAlinea::findAll(array("questioncontext_id"=>$question_id));
            foreach ($alineas as $alinea) {
                $aAlineas[] = (int)$alinea->id;
            }

        }

        //var_dump($aAlineas); exit();
        return $aAlineas;
    }


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
