<?php
require_once("Connection.php");
class Message extends Connection{

    public function getCompanyMessage(){
        $query="select empresa.nombre,mensaje.idPersona, mensaje.idEmpresa,mensaje.texto from empresa inner join mensaje"
                ." on empresa.idEmpresa=mensaje.idEmpresa where empresa.idEmpresa in"
                ."(select idEmpresa from mensaje where idEmpresa in(select empresa.idEmpresa from empresa "
                ."inner join vacante on empresa.idEmpresa=vacante.IdEmpresa"
                ." where idVacante in(select idVacante from det_vacante where idPersona in"
                ."(select idPersona from persona  where idUsuario='".$_SESSION['session_id']."')))) ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining message ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($executeQuery)==0){
            echo 1;
        }else{
            while($row = mysqli_fetch_array($executeQuery)){

                echo "
                <div class='row'>
                    <div class='col-md-4'>

                        <input type='hidden' id='txtIdCompany' value='$row[1]'>
                        <input type='hidden' id='txtIdPerson' value='$row[2]'>
                        <p><big>De: $row[0]</big></p>
                        <strong>$row[3]  <i class='fa fa-commenting '></i></strong>
                    </div>

                </div>";

                }
        }
    }

}

?>
