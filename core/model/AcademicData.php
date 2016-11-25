<?php

require_once ('Connection.php');
class AcademicData extends Connection{


    public function updateAcademicData($academicKey,$isStudying,$grade,$schoolName,$begin,$end,$lastYear){
        $query="UPDATE datos_acad set estudia_actual='".$isStudying."', grado_act='".$grade."',nom_escuela='".$schoolName."', "
                ." fec_ini='".$begin."',fec_fin='".$end."',grado_maxim_estudios='".$lastYear."' where id_datos_acad='".$academicKey."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error updating academic ".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

    public function getAcademicData(){
          $query="SELECT datos_acad.idCurriculum FROM datos_acad "
        ." INNER JOIN curriculum ON datos_acad.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error academic data".mysqli_error($this->getConnection()));

        if($executeQuery){
        $row=mysqli_fetch_array($executeQuery);

        $query2=" SELECT datos_acad.id_datos_acad,datos_acad.nom_escuela FROM datos_acad "
            ." INNER JOIN curriculum ON datos_acad.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and datos_acad.idCurriculum= '".$row[0]."' ";

        $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error academic information".mysqli_error($this->getConnection()));

            if($executeQuery2){
                while($row2=mysqli_fetch_array($executeQuery2)){

                    echo "<div class='btn-group' role='group'>
                    <i class='fa fa-graduation-cap fa-2x'></i></br>
                    $row2[1]
                    </br>
                        <div class='btn btn-group-xs' role='group'>
                            <button class='btn-xs btn-danger deleteAcademic' id='$row2[0]'>Eliminar<i class='fa fa-trash fa-fw'></i></button>
                            <button class='btn-xs btn-warning updateAcademic' data-toggle='modal' data-target='#modalUpdate' id='$row2[0]'>Editar
                            <i class='fa fa-pencil-square-o fa-fw'></i></button>
                        </div>
                    </div>";
                }
            }
        }
    }

    public function getIdAcademicData($idAcademic){
        $query="SELECT * from datos_acad where id_datos_acad = '".$idAcademic."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining academic id ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            echo "<div class='form-group'>
                        <input type='hidden' class='form-control' id='txtAcadDat' value='$row[0]' name='txtAcadData' readonly>
                        <input type='hidden' class='form-control' id='txtIsStudying' value='$row[2]' name='txtIsStudying' readonly>
                        <label for='radIsStudying' class='control-label'>¿Estudia actualmente?</label>
                        <label for='radIsStudying' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsStudyingY' value='Si' name='radIsStudying'>Si
                        </label>
                        <label for='radIsStudying' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsStudyingN' value='No' name='radIsStudying'>No
                        </label>
                    </div>

                    <div class='form-group'>
                        <label for='txtActualGrade' class='control-label'>Grado actual que cursa: </label>
                        <input type='text' class='form-control' id='txtActualGrade' value='$row[3]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolName' class='control-label'>Escuela: </label>
                        <input type='text' class='form-control' id='txtSchoolName' value='$row[4]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolStart' class='control-label'>Inicio de estudios: </label>
                        <input type='text' class='form-control' id='txtSchoolStart' value='$row[5]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtSchoolEnd' class='control-label'>Término de estudios: </label>
                        <input type='text' class='form-control' id='txtSchoolEnd' value='$row[6]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtMaxGrade' class='control-label'>Grado máximo de estudios: </label>
                        <input type='text' class='form-control' id='txtMaxGrade' value='$row[7]'>
                    </div>";
        }
    }

    public function deleteAcademicData($idAcademic){
        $query="DELETE FROM datos_acad WHERE id_datos_acad='".$idAcademic."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error deleting academic ").mysqli_error($this->getConnection());
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

}

?>
