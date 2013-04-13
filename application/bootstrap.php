<?php

chdir(dirname(__FILE__));

require_once "Gb/Log.php";
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

respond(function($rq, $rs, $ap) {
    require_once "Gb/Db.php";
//    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/data/src/rails/mine2/db/development.sqlite3"));
    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"../var/db.sqlite"));

    if (!$rs->isAjax()) {
        $rs->layout("layouts/default.phtml");
    }
    $rs->jsp = new stdClass();
    $rs->onready = "";
    $rs->layout = new stdClass();
    $rs->layout->urlHome   = getUrl("home");
    $rs->layout->urlQuests = getUrl("mestst");
    $rs->layout->current   = "";
//    $GLOBALS["_min"] = false;
    $GLOBALS["_min"] = true;
});

respond(function($rq, $rs, $ap) {
    // l'authentification. Fournit $ap->auth et $rs->auth
    require_once "lib/SessionCas.php";
    session_name("s" . md5(__DIR__));
    session_start();
    $sessionCas = SessionCas::getSingleton();
    if (isset($_GET["caslogout"])) {
        $sessionCas->logout();
    }
    $isAuth = $sessionCas->isAuthenticated();
    if ($isAuth) {
        $login = $sessionCas->getUser();

        $res = $ap->db->retrieve_one("SELECT * FROM authors WHERE login=?", $login);
        if (is_array($res)) {
          $id = $res["id"];
        } else {
          $ap->db->insert("authors", array("login"=>$login, "created_at"=>Gb_String::date_iso(), "updated_at"=>Gb_String::date_iso()));
          $id = $ap->db->lastInsertId();
        }

        $ap->auth = array("id"=>$id, "login"=>$login, "logoutUrl"=>$sessionCas->getLogoutUrl());
        Gb_Log::$file_prepend .= "user:$login ";

    } else {
        $ap->auth = array("loginUrl"=>$sessionCas->getLoginUrl());
    }
    $rs->auth = $ap->auth;
});

respond("home",         "/",                            "default#root");
respond("mestst",       "/vostests",                    "mestests#index");
respond("newtst",       "/vostests/new",                "mestests#new");
respond("onetst",       "GET  /vostests/[i:id]",        "mestests#one");
respond(                "PUT  /vostests/[i:id]",        "mestests#saveone");
respond(                "POST /vostests/[i:id]",        "mestests#submit");

respond("adbilh",       "GET  /admin/bilan",            "admin#bilanhome");
respond("adbilg",       "GET  /admin/bilan/[details|stats:type].[csv|txt|html:format]?",
                                                        "admin#bilango");
respond("adshal",       "GET  /admin/alinea[i:id]/show",
                                                        "admin#alineashow");

respond(404, function(){echo "Page inexistante";});

dispatch();
