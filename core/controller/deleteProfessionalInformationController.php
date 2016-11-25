<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="false"){
    require_once('../model/ProfessionalInformation.php');
    $idProfessional=$_POST["keyId"];

    $objProfessionalInformation = new ProfessionalInformation();
    $objProfessionalInformation -> deleteProfessionalInformation($idProfessional);
}

?>
