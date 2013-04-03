<?php

chdir(dirname(__FILE__));

//set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path());
require_once "lib/kleinExt.php";

respond(function($rq, $rs, $ap) {
    require_once "Gb/Db.php";
//    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/data/src/rails/mine2/db/development.sqlite3"));
    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/web/panouces/var/db.sqlite"));

    $rs->layout("layouts/default.phtml");
    $rs->jsp = new stdClass();
    $rs->onready = "";
    $GLOBALS["_min"] = false;
});

respond(function($rq, $rs, $ap) {
    // l'authentification. Fournit $ap->auth et $rs->auth
    require_once "lib/SessionCas.php";
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
    } else {
        $ap->auth = array("loginUrl"=>$sessionCas->getLoginUrl());
    }
    $rs->auth = $ap->auth;
});

respond(                "/",                            "default#root");
respond("mestst",       "/mestests",                    "mestests#index");
respond("newtst",       "/mestests/new",                "mestests#new");
respond("onetst",       "GET  /mestests/[i:id]",        "mestests#one");
respond(                "PUT  /mestests/[i:id]",        "mestests#saveone");
respond(                "POST /mestests/[i:id]",        "mestests#submit");

respond(404, function(){echo "Page inexistante";});

dispatch();
