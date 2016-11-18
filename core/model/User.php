<?php
include ("Connection.php");
class User extends Connection{


    public function userLogin($user,$password){
        $userName=mysqli_real_escape_string($this->getConnection(),$user);
        $pass=mysqli_real_escape_string($this->getConnection(),$password);

        $query="select nom_usuario from usuario where nom_usuario = '".$userName."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($executeQuery);
        $userResult=$row["nom_usuario"];
        if($userResult == $userName){
            $query2 = "select contrasenia,idUsuario from usuario where contrasenia = '".$pass."' and nom_usuario = '".$userName."' ";
            $executeQuery2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row2 = mysqli_fetch_array($executeQuery2);
            $passResult = $row2["contrasenia"];
            if($pass == $passResult){
                    echo 1;
                    $_SESSION["session_id"]=$row2["idUsuario"];
                    $_SESSION["session_user"]=$row["nom_usuario"];
                }else{
                    echo 3;
                }
            }else {
                echo 2;
            }
        }

    public function userType(){
        $query="SELECT usuario.idUsuario FROM usuario INNER JOIN empresa on usuario.idUsuario=empresa.idUsuario"
        ." WHERE usuario.nom_usuario= '".$_SESSION['session_user']."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error in query type ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($executeQuery)!=0){
            //empresa
            echo 1;
        }else{
            //persona
            echo 2;
        }

    }

    public function userSignUp($user,$password){
        $query = "SELECT * FROM usuario WHERE nom_usuario='".$user."'";
        $rs = mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));

        if(mysqli_num_rows($rs)!=0){
            echo 1;
        }else{
            $query2 = "SELECT MAX(idDireccion) as idDir FROM direccion";
            $rs2 = mysqli_query($this->getConnection(),$query2) or die ("ERROR ".mysqli_error($this->getConnection()));
            $row1 = mysqli_fetch_array($rs2);
            $idDir = $row1['idDir'];

            $query3 = "SELECT MAX(idContacto) as idCon FROM contacto";
            $rs3 = mysqli_query($this->getConnection(),$query3);
            $row2 = mysqli_fetch_array($rs3);

            $idContact = $row2['idCon'];


            $query4 = "INSERT INTO usuario VALUES(null,'".$user."','".$password."',".$idDir.",".$idContact.")";
            mysqli_query($this->getConnection(),$query4) or die ("ERROR ".mysqli_error($this->getConnection()));

            echo 2;

        }
    }




}
?>
