<?php
require_once("Connection.php");

class ProfessionalInformation extends Connection{

    public function getProfessionalInformation(){
        $query="SELECT datos_prof.idCurriculum FROM datos_prof "
        ." INNER JOIN curriculum ON datos_prof.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error obtaining profession info ".mysqli_error($this->getConnection()));
        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            $query2=" SELECT datos_prof.id_datos_prof,datos_prof.titulo FROM datos_prof "
            ." INNER JOIN curriculum ON datos_prof.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and datos_prof.idCurriculum= '".$row[0]."' ";

            $executeQuery2=mysqli_query($this->getConnection(),$query2)or die("Error obtaining prof information "
                                                                              .mysqli_error($this->getConnection));
            if($executeQuery2){
                while($row2=mysqli_fetch_array($executeQuery2)){
                   echo "<div class='btn-group' role='group'>
                    <i class='fa fa-id-card fa-2x'></i></br>
                    $row2[1]
                    </br>
                        <div class='btn btn-group-xs' role='group'>
                            <button class='btn-xs btn-danger updateProfessional' id='$row2[0]'>Eliminar<i class='fa fa-trash fa-fw'></i></button>
                        </div>
                    </div>";
                    /*<button class='btn-xs btn-warning updateProfessional' data-toggle='modal' data-target='#modalUpdate' id='$row2[0]'>Editar<i class='fa fa-pencil-square-o fa-fw'></i></button>*/
                }

            }
        }
    }

    public function getIdProfessionalInformation($idProfessional){

    }

    public function deleteProfessionalInformation($idProfessional){
        $query="DELETE FROM datos_prof WHERE id_datos_prof='".$idProfessional."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error deleting professional ").mysqli_error($this->getConnection());
        if($executeQuery){
            echo 1;
        }
    }
}

?>
