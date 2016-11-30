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

    public function sendMessage(){
        $query="select persona.nombre_per,vacante.puesto from persona inner join det_vacante on "
                ." det_vacante.idPersona=persona.idPersona inner join vacante"
                ." on det_vacante.idVacante=vacante.idVacante group by 1 ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die("Error obtaining message ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($executeQuery)==0){
            echo 1;
        }else{
            while($row = mysqli_fetch_array($executeQuery)){

                /*<input type='hidden' id='txtIdCompany' value='$row[2]'>
                        <input type='hidden' id='txtIdPerson' value='$row[3]'>*/
                echo "<div class='row'>
                        <div class='form-group'>
                            <label for='txtMessage'><strong>Para: $row[0]</strong><br>Vacante de: $row[1]  </label>
                            <input type='text' id='txtMessage' class='form-control' placeholder='Mensaje'>
                        </div>

                        <div class='form-group'>
                            <button type='submit' class='btn btn-success'>Enviar <i class='fa fa-commenting '></i></button>
                        </div>

                </div>";

                }
        }
    }

}

?>
