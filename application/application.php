<?php

//die("Application en maintenance pendant 5 minutes. Merci de votre compréhension !");

require_once "lib/kleinExt.php";

// démarrage session, env processing
respondExt(function($rq, $rs, $ap) {
    session_name("s" . md5(__DIR__));
    session_start();

    // fait apparaître l'id de session dans le log
    Gb_Log::$file_prepend .= "sid:" . substr(session_id(), 0, 5) . " ";
    if (!isset($_SESSION["_sessionCreatedAt"])) {
        // Loggue l'user agent (uniquement au premier accès)
        $_SESSION["_sessionCreatedAt"] = time();
        Gb_Log::logInfo("welcome userAgent=\"{$rq->userAgent()}\"");
    }

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

    $rs->onError(function($this, $msg, $type, $err){header("HTTP/1.0 500 Application Error");Gb_Log::logException($err); echo "Erreur: " . $msg;});

    /**
     * Traduction de chaine. Cherche dans $GLOBALS["translate"].
     * @param string $in chaine à traduire
     */
    $rs->tr = function($in, $default=null) {
        $tr = &$GLOBALS["translate"];
        if (isset($tr[$in])) {
            $out = $tr[$in];
        } elseif ($default === null) {
            $vd = debug_backtrace();
            $file = $vd[1]["file"];
            $line = $vd[1]["line"];
            Gb_Log::logWarning("Texte non traduit : $in ----- $file:$line");
            $out = $in;
        } else {
            $out = $default;
        }
        return $out;
    };

});

// démarrage session, mise en place du layout et de la bdd
respondExt(function($rq, $rs, $ap) {
    require_once "Gb/Db.php";
//    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/data/src/rails/mine2/db/development.sqlite3"));
    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"../var/db.sqlite"));
    \Gb\Model\Model::setAdapter($ap->db);


    if (!$rs->isAjax()) {
        $rs->layout("layouts/" . $GLOBALS["layout"]);
    }
    $rs->jsp = new stdClass();
    $rs->onready = "";
    $rs->layout = new stdClass();
    $rs->layout->urlHome   = getUrlExt("home");
    $rs->layout->urlQuests = getUrlExt("mestst");
    $rs->layout->urlExamens= getUrlExt("adexas");
    $rs->layout->urlStats  = getUrlExt("adstin");
    $rs->layout->current   = "";
    $rs->layout->bodyclass = "";
});


// Gestion de l'authentification. Fournit $_SESSION["auth"]
respondExt(                                                                     "auth#auth");

respondExt("home",         "/",                                                 "default#root");
respondExt("mestst",       "/vostests",                                         "mestests#index");
respondExt("newtst",       "/vostests/new",                                     "mestests#new");
respondExt("newtstexam",   "/vostests/examen[i:id]/new",                        "mestests#newtstexam");
respondExt("onetst",       "GET /vostests/[i:id]",                              "mestests#one");
respondExt(                "PUT /vostests/[i:id]",                              "mestests#saveone");
respondExt(                "POST /vostests/[i:id]",                             "mestests#submit");

respondExt("adexas",       "GET /admin/examens",                                "admExamens#showMany");
respondExt("adexa1",       "GET|POST /admin/examens/[i:id]",                    "admExamens#showOne");
respondExt("adexre",       "GET /admin/examens/[i:id]/repool",                  "admExamens#repool");
respondExt("adbilh",       "GET /admin/examens/[i:id]/bilan",                   "admin#bilanhome");
respondExt("adbilg",       "GET /admin/examens/[i:id]/bilan/[details|stats:type].[csv|txt|html:format]?",
                                                                                "admin#bilango");
respondExt("adshal",       "GET /admin/examens/[i:examid]/alinea[i:alineaid]/[show|popover:type]",
                                                                                "admin#alineashow");
respondExt("adstin",       "GET /admin/stats",                                  "admStats#index");



respondExt(404, function(){echo "Page inexistante";});

dispatchExt();
