<?php

require_once ('Connection.php');
class AcademicData extends Connection{


    public function updateSchoolingInformation(){
        $query="UPDATE datos_acad set ";
        echo 1;
    }

    public function getAcademicData(){
        $query="SELECT estudia_actual,grado_act,nom_escuela,fec_ini,fec_fin,grado_maxim_estudios FROM datos_acad";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error academic information".mysqli_error($this->getConnection()));
        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);
            echo "<div class='form-group'>
                <label for='txtGradoActual' class='control-label'>Grado Actual</label>
                <input type='text' class='form-control' id='txtActualGrade' value='$row[0]'>
                </div>
                <div class='form-group'>
                    <label for='txtNombreEscuela' class='control-label'>Escuela: </label>
                    <input type='text' class='form-control' id='txtSchoolName' value='$row[2]'>
                </div>
                <div class='form-group'>
                    <label for='fecInicioEstudios' class='control-label'>Inicio de estudios</label>
                    <input type='text' class='form-control' id='txtSchoolStart' value='$row[3]'>
                </div>
                <div class='form-group'>
                    <label for='fecFinEstudios' class='control-label'>Término de estudios</label>
                    <input type='text' class='form-control' id='txtSchoolEnd' value='$row[4]'>
                </div>
                <div class='form-group'>
                    <label for='gradoMaxEstudios' class='control-label'>Grado máximo de estudios</label>
                    <input type='text' class='form-control' id='txtMaxGrade' value='$row[5]'>
                </div>";
        }

    }

}

?>
