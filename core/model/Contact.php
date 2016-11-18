<?php
include ("Connection.php");
class Contact extends Connection{
     public function contactSignUp($email,$tel){
        $query = "SELECT * FROM contacto WHERE correo='".$email."'";
        $result = mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($result)!=0){
            echo 1;
        }else{

            $query2 = "SELECT * FROM contacto WHERE tel_cel='".$tel."'";
            $result2= mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));

            if(mysqli_num_rows($result2)!=0){
                echo 2;
            }else{
                $insert = "INSERT INTO contacto VALUES(null,'".$email."','".$tel."')";
                mysqli_query($this->getConnection(),$insert) or die ("ERROR INSERT".mysqli_error($this->getConnection()));
                echo 3;
            }

        }

    }
}
?>
