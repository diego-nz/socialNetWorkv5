<?php
require_once("Connection.php");

class WorkingExperience extends Connection{

    public function getWorkingExperience(){
    $query="SELECT exp_laboral.idCurriculum FROM exp_laboral "
        ." INNER JOIN curriculum ON exp_laboral.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error academic data".mysqli_error($this->getConnection()));

        if($executeQuery){
        $row=mysqli_fetch_array($executeQuery);

        $query2=" SELECT exp_laboral.id_exp_laboral,exp_laboral.cargo_ultimo_puesto FROM exp_laboral "
            ." INNER JOIN curriculum ON exp_laboral.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and exp_laboral.idCurriculum= '".$row[0]."' ";

        $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error academic information".mysqli_error($this->getConnection()));

            if($executeQuery2){
                while($row2=mysqli_fetch_array($executeQuery2)){

                    echo "<div class='btn-group' role='group'>
                    <i class='fa fa-briefcase fa-2x'></i></br>
                    $row2[1]
                    </br>
                        <div class='btn btn-group-xs' role='group'>
                            <button class='btn-xs btn-danger deleteWork' id='$row2[0]'>Eliminar<i class='fa fa-trash fa-fw'></i></button>
                            <button class='btn-xs btn-warning updateWork' data-toggle='modal' data-target='#modalUpdate' id='$row2[0]'>Editar
                            <i class='fa fa-pencil-square-o fa-fw'></i></button>
                        </div>
                    </div>";
                }
            }
        }
    }

    public function getIdWorkingExperience($idWorkingExperience){
        $query="SELECT * from exp_laboral where id_exp_laboral='".$idWorkingExperience."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query)
            or die("Error obtaining working identifier ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);
            echo "<div class='form-group'>
                                <input type='hidden' class='form-control' id='txtWork' value='$row[0]' name='txtCourse' readonly>
                            </div>
                        <div class='form-group'>
                                <input type='hidden' class='form-control' id='txtIsWorking' value='$row[2]' name='txtIsWorking' readonly>
                        <label for='radIsWorking' class='control-label'>¿Trabaja actualmente?</label>
                        <label for='radIsWorking' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsWorkingY' value='Si' name='radIsWorking'>Si
                        </label>
                        <label for='radIsWorking' class='radio-inline'>
                            <input type='radio' class='form-control' id='radIsWorkingN' value='No' name='radIsWorking'>No
                        </label>
                            </div>
                            <div class='form-group'>
                                <label for='txtLastWork' class='control-label'>Último cargo/Cargo actual: </label>
                                <input type='text' class='form-control' id='txtLastWork' value='$row[3]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtDescription' class='control-label'>Descripcion/funciones: </label>
                                <input type='text' class='form-control' id='txtDescription' value='$row[4]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtTime' class='control-label'>Tiempo en ese cargo: </label>
                                <input type='text' class='form-control' id='txtTime' value='$row[5]'>
                            </div>";
        }
    }

    public function updateWorkingExperience($idWorkingExperience,$isWorking,$lastWork,$description,$timeWorking){
        $query="UPDATE exp_laboral set trabaja='".$isWorking."', cargo_ultimo_puesto='".$lastWork."',descripcion='".$description."', "
                ." tiempo='".$timeWorking."' where id_exp_laboral='".$idWorkingExperience."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error updating experience ".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

    public function deleteWorkingExperience($idWorkingExperience){
        $query="DELETE from exp_laboral WHERE id_exp_laboral='".$idWorkingExperience."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error  deleting workingº".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

}

?>
