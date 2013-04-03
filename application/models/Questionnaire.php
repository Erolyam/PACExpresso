<?php
require_once "Gb/String.php";
require_once "lib/Model.php";
require_once "models/Question.php";
require_once "models/QuestionAlinea.php";


class Questionnaire extends Model {

    public function __construct($db) {
        parent::__construct("questionnaires", $db);
    }


    /**
     * Tire des questions
     * @param integer $nombreDemandeMin
     * @param integer[optional] $nombreDemandeMax
     * @throws Exception
     * @return array: array de questionAlineas
     */
    public function createNew($nombreDemandeMin, $nombreDemandeMax=null) {
        if (null == $nombreDemandeMax) {
            $nombreDemandeMax = $nombreDemandeMin;
        }
        $Questions = new Question($this->adapter());
        $QA        = new QuestionAlinea($this->adapter());

        // récupère le nomde d'alinéas par question
        $aNbAlineasPerQuestion = $Questions->getNbAlineasPerQuestion();
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
            $qNum    = array_keys($aNbAlineasPerQuestion)[$rand];
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
        $aAlineas = array();
        foreach ($aQuestions as $question_id) {
            $alineas = $QA->search(array("question_id"=>$question_id));
            foreach ($alineas as $alinea) {
                $aAlineas[] = (int)$alinea["id"];
            }

        }

        //var_dump($aAlineas); exit();
        return $aAlineas;
    }

    /**
     * Insère un nouveau questionnaire
     * @param integer $etudiant_id
     * @param array $aAlineasId
     * @return number
     */
    public function saveNew($etudiant_id, $aAlineasId) {
        $data = array(
            "etudiant_id"          => $etudiant_id,
            "questionAlineas_json" => JSON_encode($aAlineasId),
            "created_at"           => Gb_String::date_iso(),
            "updated_at"           => Gb_String::date_iso(),
        );
        //$res=$this->adapter()->retrieve_all("select * from authors");
        //print_r($res);
        //exit(0);
        $this->adapter()->insert($this->_tablename, $data);
        $id = $this->adapter()->lastInsertId();
        return $id;
    }


    /**
     * Enregistre les réponses données par l'étudiant
     * @param integer $id
     * @param array $values
     */
    public function saveAnswers($id, array $values) {
        $data = array(
            "submited_data_json"   => JSON_encode($values),
            "updated_at"           => Gb_String::date_iso(),
        );
        $this->adapter()->update($this->_tablename, $data, $this->adapter()->quoteInto("id=?", $id));
    }
}
