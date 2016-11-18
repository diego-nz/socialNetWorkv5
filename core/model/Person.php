<?php

include('Connection.php');
class Person extends Connection{


    public function signUpPerson($nombre,$apePat,$apeMat,$curp,$fechaNac,$sexo){
        $querySelect = "SELECT * FROM persona WHERE curp='".$curp."'";
        $rs = mysqli_query($this->getConnection(),$querySelect);

        if(mysqli_num_rows($rs)!=0){
            echo 1;
        }else{

            $querySelect1 = "SELECT MAX(idUsuario)as idUsuario FROM usuario";
            $rs = mysqli_query($this->getConnection(),$querySelect1) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row = mysqli_fetch_array($rs);

            $idUsu = $row['idUsuario'];

            $queryInsert = "INSERT INTO persona VALUES(null,".$idUsu.",'".$nombre."','".$apePat."','".$apeMat."','".$curp."','".$fechaNac."','".$sexo."')";
            mysqli_query($this->getConnection(),$queryInsert) or die ("ERROR ".mysqli_error($this->getConnection()));
            echo 2;
        }



    }


}


?>
