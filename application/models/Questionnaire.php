<?php
require_once "Gb/String.php";

class Questionnaire extends \Gb\Model\Model {

    static $_tablename = "questionnaires";
    static $_pk        = "id";

    static $rels = array(
        'etudiant'      =>array('reltype'=>'belongs_to',      'class_name'=>'Author',         'foreign_key'=>'etudiant_id'),
        'alineas'       =>array('reltype'=>'belongs_to_json', 'class_name'=>'QuestionAlinea', 'foreign_key'=>'questionAlineas_json')
    );

    /**
     * Tire des questions
     * @param integer $nombreDemandeMin
     * @param integer[optional] $nombreDemandeMax
     * @throws Exception
     * @return array: array de questionAlineas
     */
    public function createNew($nombreDemandeMin, $nombreDemandeMax=null) {
        // todo : rajouter validated/active aux alineas
        // order les alineas par chemNum
        if (null == $nombreDemandeMax) {
            $nombreDemandeMax = $nombreDemandeMin;
        }

        // récupère le nombre d'alinéas par question
        $aNbAlineasPerQuestion = Question::getNbAlineasPerQuestion();
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
        // TODO : order by chemNum
        $aAlineas = array();
        foreach ($aQuestions as $question_id) {
            $alineas = QuestionAlinea::findAll(array("question_id"=>$question_id));
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
     * @param array[modified] $qaire
     */
    public function computeScore() {
        /*
            $this->o : Array(
              [id] => 2
              [etudiant_id] => 1
              [questionAlineas_json] => [36,29,31,15,14,22,21]
              [submited_at] =>
              [submited_data_json] => [1,2,4,3,5,7,0]
              [score] =>
              [created_at] => 2013-04-01 16:55:10
              [updated_at] => 2013-04-03 12:06:44
            )
        */

        $aAlineaIds  = json_decode($this->questionAlineas_json);
        $aEtuAnswers = json_decode($this->submited_data_json);
        $aAlineas    = $this->rel("alineas");

        $score      = 0;
        $scoremax   = 0;
        $index      = 0;
        $aSolutions = array();
        foreach ($aAlineaIds as $alinea_id) {
            $etuAnswer    = $aEtuAnswers[$index];
            $alinea       = $aAlineas[$alinea_id];
            $solutions    = json_decode($alinea["solutions"]);
            $solution     = $solutions[0];
            $aSolutions[] = $solution;

            if ($solution == $etuAnswer) {
              $score++;
            }

            $index++;
            $scoremax++;
        }

        $this->score         = $score . "/" . $scoremax;
        $this->solution_json = json_encode($aSolutions);
        $this->submited_at   = Gb_String::date_iso();
    }
}
