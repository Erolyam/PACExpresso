<?php
require_once "Gb/Db.php";

class Model {

    /**
     * @var Gb_Db
     */
    protected $_db;
    protected $_tablename;

    public function __construct($tablename, $db) {
        $this->_tablename = $tablename;
        $this->_db = $db;
    }

    public function getById($id) {
        if (is_array($id)) {
            $sql = "SELECT * from {$this->_tablename} WHERE id IN ";
            $aVals = array();
            foreach($id as $i) {
                $aVals[] = $this->_db->quote($i);
            }
            $sql .= "(" . join(",", $aVals). ")";
            $res = $this->_db->retrieve_all($sql, null, "id", null, true);
            return $res;
        }
        $sql = "select * from {$this->_tablename} where id = ?";
        $res = $this->_db->retrieve_one($sql, $id);
        return $res;
        //return $this->unjson_one($res);
    }

    public function length() {
        $sql = "select count(*) as 'A' from {$this->_tablename}";
        $res = $this->_db->retrieve_one($sql, null, 'A');
        return $res;
    }

    public function search($aPar=null) {
        $sql = $this->_search($aPar);
        $res = $this->_db->retrieve_all($sql);
        return $res;
        //return $this->unjson_all($res);
    }

    public function searchFirst($aPar = null) {
        $sql = $this->_search($aPar);
        $sql .= " LIMIT 1";
        $res = $this->_db->retrieve_one($sql);
        return $res;
        //return $this->unjson_one($res);
    }

    protected function _search($aPar=null) {
        if (null === $aPar) {
            $aPar = array();
        }
        $sql = "select * from {$this->_tablename}";
        $aWhere = array();
        foreach ($aPar as $ind=>$val) {
            $aWhere[] = $this->_db->quoteInto($ind.'=?', $val);
        }
        if (count($aWhere)) {
            $sql .= " WHERE " . join(" AND ", $aWhere);
        }
        return $sql;
    }

    protected function unjson_one($a) {
        foreach($a as $col=>$val) {
            if ('_json' === substr($col, -5)) {
                $a[$col] = json_decode($val);
            }
        }
        return $a;
    }

    protected function unjson_all($rows) {
        if (!(is_array($rows) && count($rows)) ) {
            return;
        }
        $firstrow = array_keys($rows);
        $firstrow = array_keys($rows[$firstrow[0]]);
        foreach ($firstrow as $col) {
            if ('_json' === substr($col, -5)) {
                foreach ($rows as $rowid=>$row) {
                    $rows[$rowid][$col] = json_decode($row[$col]);
                }
            }

        }
        return $rows;
    }

    public function adapter() {
        return $this->_db;
    }

    public function tablename() {
        return $this->_tablename;
    }

}
