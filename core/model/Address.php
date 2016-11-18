<?php
include ("Connection.php");

class Address extends Connection{

    public function addressSignUp($estado,$municipio,$col,$calle,$numInt,$numExt){
        $query = "INSERT INTO direccion VALUES(null,'".$estado."','".$municipio."','".$col."','".$calle."','".$numInt."','".$numExt."')";
        mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));

        echo 1;

    }

}

?>
