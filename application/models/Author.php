<?php
require_once "lib/Model.php";

class Author extends Model {

    public function __construct($db) {
        parent::__construct("authors", $db);
    }

}