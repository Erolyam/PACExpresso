#!/usr/bin/env php
<?php

require dirname(__FILE__) . "/../bootstrap.php";
require_once "Gb/String.php";

$plugin = new Muninplugin($argv);
$plugin->init()->run();

class Muninplugin {
    public $context;
    public $filter;
    public $command;
    protected $data;

    public function __construct($argv) {
        $regexp = '/(?<base>[a-zA-Z0-9]*)-(?<context>[a-z]*)_(?<filter>[a-z]*)(\.php)?$/';
        $res = preg_match($regexp, $argv[0], $match);
        $acceptedContextes = array("exams", "scores");
        $acceptedFilters   = array("all",   "active");
        if (1 !== $res) {
            echo "The filename should be BASE-CONTEXT_FILTER (optionnaly ended with .php)\n";
            echo "CONTEXT may be " . implode("|", $acceptedContextes) . "\n";
            echo "FILTER may be: " . implode("|", $acceptedFilters) . "\n";
            die();
        }

        $this->context = $match["context"];
        $this->filter = $match["filter"];

        // first parameter is the command (config, autoconf, none)
        $this->command = (isset($argv[1])) ? ($argv[1]) : ("");
    }

    public function init() {
        $sql = "";

        $filter = $this->filter;
        $where = ($filter === "active") ? ("ex.is_active=1") : (
            ($filter === "all") ? "1==1" : ""
        );

        $sql = <<<EOF
    SELECT ex.id, ex.is_active, ex.title,
           count(*) AS 'nb',
           AVG(qaire.score * 100 / ex.nbalineas) AS 'score'
      FROM questionnaires qaire
      JOIN examens        ex
        ON ex.id=qaire.examen_id
     WHERE qaire.score IS NOT NULL
       AND ($where)
  GROUP BY qaire.examen_id;
EOF;

        $db = new Gb_Db(array("type"=>"sqlite", "name"=>"../var/db.sqlite"));

        $this->data = $db->retrieve_all($sql);

        return $this;
    }


    public function run() {
        switch ($this->command) {
            case "autoconf":
                $this->run_autoconf();
                break;
            case "config":
                $this->run_config();
                break;
            default:
                $this->run_default();
        }
    }


    public function run_autoconf() {
        echo "yes\n";
    }

    public function run_config() {
        $filter = $this->filter;
        $filterFR = ($filter==="all") ? ("tous") : (
            ($filter==="active") ? ("actifs") : ""
        );

        switch ($this->context) {
            case "exams":
                echo utf8_decode("graph_vlabel nb examens passés\n");
                echo utf8_decode("graph_title Pacexpresso: Nombre examens ({$filterFR})\n");

            case "scores":
                echo utf8_decode("graph_vlabel Note (sur 100)\n");
                echo utf8_decode("graph_title Pacexpresso: Moyenne des notes par examen ({$filterFR})\n");
        }

        echo "graph_args --base 1000 -l 0\n";
        echo "graph_category applications\n";

        foreach ($this->data as $row) {
            $id = "id{$row['id']}";
            echo "{$id}.draw LINE1\n";
            echo utf8_decode("{$id}.label {$row['title']}\n");
        }
    }


    public function run_default() {
        foreach ($this->data as $row) {
            $id = "id{$row['id']}";
            switch ($this->context) {
                case "exams":
                    echo "{$id}.value {$row['nb']}\n";
                    break;
                case "scores":
                    echo "{$id}.value {$row['score']}\n";
                    break;
            }
        }
    }


}

