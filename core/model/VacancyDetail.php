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

    public function checkStatusVacancy(){
        $query="SELECT idEmpresa FROM empresa WHERE idUsuario = ".$_SESSION['session_id']."";
        $rs = mysqli_query($this->getConnection(),$query) or die ("ERROR AL EJECUTAR LA CONSULTA " . mysqli_error($this->getConnection()));

        $row = mysqli_fetch_array($rs);

        $idCompany = $row[0];

        $query2 = "SELECT idVacante,puesto,num_vacantes FROM vacante WHERE idEmpresa =".$idCompany." ";

        $rs2 = mysqli_query($this->getConnection(),$query2)or die("ERROR en la segunada consulta ".mysqli_error($this->getConnection()));

        if(mysqli_num_rows($rs2) == 0){

            echo 1;

        }else{
            echo "<div class='jumbotron'>";
            echo "<table id='tableDetailVacancy' class='table table-inverse' style='td:hover; cursor:pointer;>";

            echo "<thead>";
            echo "<tr><td style='display:none'>
            </td><td style='color:#ffffff;'>Puesto</td><td>No. Vacantes</td></tr>";
            echo "</thead>";

            echo "<tbody>";
            while($row2 = mysqli_fetch_array($rs2)){

            echo "<tr style='color:#ffffff;'><td style='display:none'>".$row2[0]."</td><td >".$row2[1]."</td><td>".$row2[2]."</td></tr>";
            }
            echo "</tbody>";

            echo "</table>";
            echo "</div>";
        }

    }

    public function getNuPersons($idVacancy){
        $query = "SELECT count(*)as contador FROM det_vacante WHERE idVacante=".$idVacancy." ";
        $rs = mysqli_query($this->getConnection(),$query) or die ("ERROR ".mysqli_error($this->getConnection()));

        $fila = mysqli_fetch_array($rs);

        if($fila['contador'] == 0){
            echo 1;
        }else{
            echo "Numero de postulantes: ".$fila['contador'];
        }


    }

}
?>
