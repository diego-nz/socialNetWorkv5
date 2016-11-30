<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/ProfessionalInformation.php");

    $degree=$_POST["newDegree"];
    $cedule=$_POST["newCedule"];
    $objProfInfo = new ProfessionalInformation();
    $objProfInfo -> addProfessionalInformation($degree,$cedule);

}

?>
