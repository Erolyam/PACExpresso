<?php

chdir(dirname(__FILE__));

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

//set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path());
require_once "lib/kleinExt.php";

// démarrage session, mise en place du layout et de la bdd
respondExt(function($rq, $rs, $ap) {
    session_name("s" . md5(__DIR__));
    session_start();

    require_once "Gb/Db.php";
//    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/data/src/rails/mine2/db/development.sqlite3"));
    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"../var/db.sqlite"));
    \Gb\Model\Model::setAdapter($ap->db);


    if (!$rs->isAjax()) {
        $rs->layout("layouts/default.phtml");
    }
    $rs->jsp = new stdClass();
    $rs->onready = "";
    $rs->layout = new stdClass();
    $rs->layout->urlHome   = getUrlExt("home");
    $rs->layout->urlQuests = getUrlExt("mestst");
    $rs->layout->urlExamens= getUrlExt("adexas");
    $rs->layout->urlBilan  = getUrlExt("adbilh");
    $rs->layout->current   = "";
    $rs->layout->bodyclass = "";
});

respondExt(function($rq, $rs, $ap) {
    // env processing
    include "ini/globals.php";
    if (isset($_REQUEST["env"]) && strlen($_REQUEST["env"])) {
        $_SESSION["ENV"] = $_REQUEST["env"];
    } elseif (isset($_REQUEST["env"]) && ""===$_REQUEST["env"] && isset($_SESSION["ENV"])) {
        // reset to default env
        unset($_SESSION["ENV"]);
    }
    if (isset($_SESSION["ENV"])) {
        $GLOBALS["_ENV"] = $_SESSION["ENV"];
    } else {
        $GLOBALS["_ENV"] = $GLOBALS["env_default"];
    }
    apply_env();

    /**
     * Traduction de chaine. Cherche dans $GLOBALS["translate"].
     * @param string $in chaine à traduire
     */
    $rs->tr = function($in) {
        $tr = &$GLOBALS["translate"];
        if (isset($tr[$in])) {
            $out = $tr[$in];
        } else {
            $vd = debug_backtrace();
            $file = $vd[1]["file"];
            $line = $vd[1]["line"];
            Gb_Log::logWarning("Texte non traduit : $in ----- $file:$line");
            $out = $in;
        }
        return $out;
    };

});



// Gestion de l'authentification. Fournit $_SESSION["auth"]
respondExt(                                                "auth#auth");

respondExt("home",         "/",                            "default#root");
respondExt("mestst",       "/vostests",                    "mestests#index");
respondExt("newtst",       "/vostests/new",                "mestests#new");
respondExt("newtstexam",   "/vostests/examen[i:id]/new",   "mestests#newtstexam");
respondExt("onetst",       "GET  /vostests/[i:id]",        "mestests#one");
respondExt(                "PUT  /vostests/[i:id]",        "mestests#saveone");
respondExt(                "POST /vostests/[i:id]",        "mestests#submit");

respondExt("adbilh",       "GET  /admin/bilan",            "admin#bilanhome");
respondExt("adbilg",       "GET  /admin/bilan/[details|stats:type].[csv|txt|html:format]?",
                                                        "admin#bilango");
respondExt("adshal",       "GET  /admin/alinea[i:id]/[show|popover:type]",
                                                        "admin#alineashow");

respondExt("adexas",       "GET  /admin/examens",          "admExamens#showMany");
respondExt("adexa1",       "GET  /admin/examens/[i:id]",   "admExamens#showOne");
respondExt("repool",       "GET  /admin/examens/[i:id]/repool",
                                                           "admExamens#repool");


respondExt(404, function(){echo "Page inexistante";});

dispatchExt();
