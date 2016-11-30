<?php
include ("Connection.php");

class Vacancy extends Connection{

    public function addVacancy($dato1,$dato2,$dato3,$dato4,$dato5,$dato6,$dato7,$dato8,$dato9){
       $query="select idEmpresa from empresa INNER JOIN usuario on empresa.idUsuario = usuario.idUsuario where usuario.idUsuario= '".$_SESSION["session_id"]."' ";

        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error en verif id ".mysqli_error($this->getConnection()));
        $id=$_SESSION["session_id"];

        if(mysqli_num_rows($executeQuery)!=0){
               $row=mysqli_fetch_array($executeQuery);
                $company= $row[0];
                    $query2="INSERT INTO vacante values (null,'".$company."','".$dato1."','".$dato2."','".$dato3."',"
                            ." '".$dato5."','".$dato4."','".$dato6."','".$dato7."','".$dato9."','".$dato8."')";
                    $executeQuery2=mysqli_query($this->getConnection(),$query2) or die("Error vacancy ".mysqli_error($this->getConnection()));
            echo 1;
        }
    }

    public function getVacancy($data1){
        $query="SELECT idPersona FROM persona where idUsuario = '".$_SESSION['session_id']."' ";
        $executeQuery=mysqli_query($this->getConnection(),$query) or die ("Error in id vacacny select ".mysqli_error($this->getConnection()));
        $row=mysqli_fetch_array($executeQuery);
        $query2="SELECT empresa.nombre,vacante.nombre,vacante.puesto,vacante.tipo_jornada,vacante.experiencia_requerida,"
                ." vacante.num_vacantes,vacante.zona,vacante.salario,vacante.fecha_exp,vacante.comentarios,vacante.idVacante"
                ." FROM vacante INNER JOIN empresa on vacante.idEmpresa=empresa.idEmpresa WHERE "
                ." vacante.nombre like (SELECT datos_prof.titulo FROM datos_prof INNER JOIN curriculum ON "  ."curriculum.idCurriculum=datos_prof.idCurriculum INNER JOIN persona ON persona.idPersona=curriculum.idPersona "
                ." WHERE persona.idPersona = '".$row['idPersona']."') ";
        $executeQuery2=mysqli_query($this->getConnection(),$query2) or die ("Error en getVacancy ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($executeQuery2)){
            echo "<div id='postVacancy'><div class='table-responsive'>";

         while($row2=mysqli_fetch_array($executeQuery2)){

             echo "<div class='jumbotron'>
                                            <table class='table table-inverse'>
                                                <tr>
                                                <th style='text-align:center;'>Empresa:</th>
                                                <th style='text-align:center;'>$row2[0]</th>
                                                </tr>
                                                <tr>
                                                    <td>Perfil:</td>
                                                    <td>$row2[1]</td>
                                                </tr>
                                                <tr>
                                                    <td>Puesto:</td>
                                                    <td>$row2[2]</td>
                                                </tr>
                                                <tr>
                                                    <td>Jornada:</td>
                                                    <td>$row2[3]</td>
                                                </tr>
                                                <tr>
                                                    <td>Experiencia:</td>
                                                    <td>$row2[4]</td>
                                                </tr>
                                                <tr>
                                                    <td>Número de Vacantes:</td>
                                                    <td>$row2[5]</td>
                                                </tr>
                                                <tr>
                                                    <td>Zona:</td>
                                                    <td>$row2[6]</td>
                                                </tr>
                                                <tr>
                                                    <td>Salario:</td>
                                                    <td>$row2[7]</td>
                                                </tr>
                                                <tr>
                                                    <td>Esta vacante expira:</td>
                                                    <td>$row2[8]</td>
                                                </tr>
                                                <tr>
                                                    <td>Otros datos:</td>
                                                    <td>$row2[9]</td>
                                                </tr>
                                                <tr>
                                                    <td><input type='hidden' value='$row2[10]' name='txtidVacancy' id='txtIdVacancy'></td>
                                                    <td><div id='postulateMsg'></div>
                                                    <img style='width:50px;height:50px' src='assets/images/choose.png' alt='Postularme a esta vacante' id='postulateToVacancy'/></td>
                                                </tr>
                                            </table>
                                        </div>";
         }
            echo "</div></div>";
        }else{
            echo 2;
        }

    }
}

?>
