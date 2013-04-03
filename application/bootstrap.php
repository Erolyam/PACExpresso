<?php

chdir(dirname(__FILE__));
//set_include_path(dirname(__FILE__) . PATH_SEPARATOR . get_include_path());
require_once "lib/kleinExt.php";

respond(function($rq, $rs, $ap) {
    require_once "Gb/Db.php";
//    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/data/src/rails/mine2/db/development.sqlite3"));
    $ap->db = new Gb_Db(array("type"=>"sqlite", "name"=>"/home/gilles/web/panouces/var/db.sqlite"));
    $ap->auth = array("id"=>1, "login"=>"gbouthen");
    $rs->layout("layouts/default.phtml");
    $rs->jsp = new stdClass();
    $rs->onready = "";
    $GLOBALS["_min"] = false;
});
respond(                "/",                            "default#root");
respond(                "/mestests",                    "mestests#index");
respond("newtst",       "/mestests/new",                "mestests#new");
respond("onetst",       "GET /mestests/[i:id]",         "mestests#one");
respond(                "PUT /mestests/[i:id]",         "mestests#saveone");

respond(404, function(){echo "Page inexistante";});

dispatch();
