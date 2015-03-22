<?php

chdir(dirname(__FILE__));
set_include_path(
    dirname(__FILE__) . PATH_SEPARATOR .
    dirname(__FILE__) . DIRECTORY_SEPARATOR . 'extlib' . PATH_SEPARATOR .
    get_include_path()
);

require_once "Gb/Db.php";
require_once "Gb/Log.php";
require_once "Gb/Model.php";

require_once "models/Examen.php";
require_once "models/Qairepool.php";
require_once "models/Question.php";
require_once "models/QuestionAlinea.php";
require_once "models/Questionnaire.php";
require_once "models/QuestionnaireAlinea.php";
require_once "models/Referentiel.php";
require_once "models/Theme.php";
require_once "models/User.php";
require_once "models/Userprofile.php";

Gb_Log::setLogFilename("../var/logfile.log");

//valeurs par défaut
Gb_Log::$loglevel_file = Gb_Log::LOG_INFO;
// TODO : Environnement; Ici "debug"
Gb_Log::$loglevel_file = Gb_Log::LOG_DEBUG;
Gb_Log::$loglevel_showuser = Gb_Log::LOG_CRIT;
Gb_Log::installErrorHandlers();
// pour ajouter un texte avant chaque ligne de log: faire
// Gb_Log::$file_prepend .= "user:$user ";
//Gb_Glue::registerPlugin("Gb_Log", array("auth", 'logPlugin'));
