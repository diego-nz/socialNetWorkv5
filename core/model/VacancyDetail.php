<?php
require_once ("Connection.php");
class VacancyDetail extends Connection{
    public function addVacancyDetail($vacancy){
        $query="SELECT idPersona from persona where idUsuario = '".$_SESSION['session_id']."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error in det_vac ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($executeQuery)){
            $row=mysqli_fetch_array($executeQuery);
            $personId=$row[0];
            $query2="INSERT INTO det_vacante VALUES(null,'".$personId."','".$vacancy."')";
            $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error at adding det_vac ".mysqli_error($this->getConnection()));
            echo 1;
        }
    }
}
?>
