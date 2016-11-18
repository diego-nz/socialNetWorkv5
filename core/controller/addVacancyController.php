<?php
    include "../model/Vacancy.php";
if(isset($_POST)){

$action=$_POST["f"];
if($action == "true"){
    $data1=$_POST["vacante"];
    $data2=$_POST["puesto"];
    $data3=$_POST["jornada"];
    $data4=$_POST["vacantes"];
    $data5=$_POST["experiencia"];
    $data6=$_POST["zona"];
    $data7=$_POST["salario"];
    $data8=$_POST["comentarios"];
    $data9=$_POST["expira"];
    $objVacancy = new Vacancy();
    $objVacancy-> addVacancy($data1,$data2,$data3,$data4,$data5,$data6,$data7,$data8,$data9);
    //echo $data1,$data2,$data3,$data4,$data5,$data6,$data7,$data8,$data9;
}

}
?>
