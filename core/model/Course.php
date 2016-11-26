<?php
require_once("Connection.php");
class Course extends Connection{

    public function getCourses(){
        $query="SELECT curso.idCurriculum FROM curso "
        ." INNER JOIN curriculum ON curso.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error course data".mysqli_error($this->getConnection()));

        if($executeQuery){//añadir campo primary key auto_increment a curso ->id_curso
            $row=mysqli_fetch_array($executeQuery);

             $query2=" SELECT curso.id_curso,curso.nombre FROM curso "
            ." INNER JOIN curriculum ON curso.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and curso.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2)or die("Error course information".mysqli_error($this->getConnection()));

            if($executeQuery2){
                  while($row2=mysqli_fetch_array($executeQuery2)){

                    echo "<div class='btn-group' role='group'>
                    <i class='fa fa-folder-open fa-2x'></i></br>
                    $row2[1]
                    </br>
                        <div class='btn btn-group-xs' role='group'>
                            <button class='btn-xs btn-danger deleteCourse' id='$row2[0]'>Eliminar<i class='fa fa-trash fa-fw'></i></button>
                            <button class='btn-xs btn-warning updateCourse' data-toggle='modal' data-target='#modalUpdate' id='$row2[0]'>Editar
                            <i class='fa fa-pencil-square-o fa-fw'></i></button>
                        </div>
                    </div>";
                }
            }
        }

    }

    public function getIdCourse($idCourse){
        $query="SELECT * from curso where id_curso = '".$idCourse."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining academic identifier ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);
            echo "<div class='form-group'>
                                <input type='hidden' class='form-control' id='txtCourse' value='$row[0]' name='txtCourse' readonly>
                            </div>
                            <div class='form-group'>
                                <label for='txtCourseName' class='control-label'>Nombre del curso: </label>
                                <input type='text' class='form-control' id='txtCourseName' value='$row[2]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtArea' class='control-label'>Área: </label>
                                <input type='text' class='form-control' id='txtArea' value='$row[3]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtCourseStart' class='control-label'>Inicio de curso: </label>
                                <input type='text' class='form-control' id='txtCourseStart' value='$row[4]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtCourseEnd' class='control-label'>Término de curso: </label>
                                <input type='text' class='form-control' id='txtCourseEnd' value='$row[5]'>
                            </div>
                            <div class='form-group'>
                                <label for='txtCertified' class='control-label'>Constancia: </label>
                                <input type='text' class='form-control' id='txtCertified' value='$row[6]'>
                            </div>";
        }
    }

    public function updateCourse($idCourse,$course,$area,$start,$end,$certified){
        $query="UPDATE curso set nombre='".$course."',area='".$area."',fec_ini='".$start."',fec_fin='".$end."',"
                ."constancia='".$certified."' where id_curso= '".$idCourse."'";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error updating course ".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }
    }

    public function deleteCourse($idCourse){
        $query="DELETE FROM curso WHERE id_curso= '".$idCourse."'";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error updating course ".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

}

?>
