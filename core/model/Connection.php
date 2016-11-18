<?php
require_once '../core.php';
session_start();
class Connection{

    private $connection;

    public function makeConnection(){
        if(!isset($this->connection)){
            $this->connection = (mysqli_connect(HOST,USER,PASSWORD));
            mysqli_select_db($this->connection,DATABASE) or die("ERROR DATABASE ".mysqli_error($this->connection));

        }else{
            echo('ERROR TO CONNECT '. mysqli_connect_error($this->connection));
        }
        return $this->connection;
    }

    public function getConnection(){
        if($this->connection == null){
            $this->makeConnection();
        }
        return $this->connection;
    }

    public function closeConnection(){
        mysqli_close($this->connection);
    }
}
?>
