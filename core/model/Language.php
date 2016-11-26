<?php
require_once("Connection.php");
class Language extends Connection{

    public function getLanguage(){
     $query="SELECT idioma.idCurriculum FROM idioma "
        ." INNER JOIN curriculum ON idioma.idCurriculum=curriculum.idCurriculum "
        ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
        ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error language data".mysqli_error($this->getConnection()));
        if($executeQuery){
        $row=mysqli_fetch_array($executeQuery);

        $query2=" SELECT idioma.id_idioma,idioma.nombre FROM idioma "
            ." INNER JOIN curriculum ON idioma.idCurriculum=curriculum.idCurriculum "
            ." INNER JOIN persona ON curriculum.idPersona=persona.idPersona"
            ." INNER JOIN usuario ON persona.idUsuario=usuario.idUsuario WHERE usuario.idUsuario='".$_SESSION['session_id']."' "
            ." and idioma.idCurriculum= '".$row[0]."' ";

        $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error language information".mysqli_error($this->getConnection()));

            if($executeQuery2){
                while($row2=mysqli_fetch_array($executeQuery2)){

                    echo "<div class='btn-group' role='group'>
                    <i class='fa fa-language fa-2x'></i></br>
                    $row2[1]
                    </br>
                        <div class='btn btn-group-xs' role='group'>
                            <button class='btn-xs btn-danger deleteLanguage' id='$row2[0]'>Eliminar<i class='fa fa-trash fa-fw'></i></button>
                            <button class='btn-xs btn-warning updateLanguage' data-toggle='modal' data-target='#modalUpdate' id='$row2[0]'>Editar
                            <i class='fa fa-pencil-square-o fa-fw'></i></button>
                        </div>
                    </div>";
                }
            }
        }
    }

     public function getIdLanguage($idIdioma){
        $query="SELECT * from idioma where id_idioma = '".$idIdioma."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error obtaining language identifier ".mysqli_error($this->getConnection()));

        if($executeQuery){
            $row=mysqli_fetch_array($executeQuery);

            echo "<div class='form-group'>
                        <input type='hidden' class='form-control' id='txtLanguage' value='$row[0]' name='txtAcadData' readonly>
                        <label for='txtLanguageName'>Idioma: </label>
                        <input type='text' class='form-control' id='txtLanguageName' value='$row[2]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtLanguageLevel' class='control-label'>Nivel: </label>
                        <input type='text' class='form-control' id='txtLanguageLevel' value='$row[3]'>
                    </div>
                    <div class='form-group'>
                        <label for='txtLanguageCertified' class='control-label'>Certificado: </label>
                        <input type='text' class='form-control' id='txtLanguageCertified' value='$row[4]'>
                    </div>";
        }
    }

     public function updateLanguage($languageId,$languageName,$languageLevel,$languageCertified){
        $query="UPDATE idioma set nombre='".$languageName."', nivel='".$languageLevel."',certificado='".$languageCertified."' "
                ." where id_idioma='".$languageId."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error updating language ".mysqli_error($this->getConnection()));
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }

    public function deleteLanguage($idLanguage){
        $query="DELETE FROM idioma WHERE id_idioma='".$idLanguage."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query)or die("Error deleting academic ").mysqli_error($this->getConnection());
        if($executeQuery){
            echo 1;
        }/*else{
            echo 2;
        }*/
    }
}

?>
