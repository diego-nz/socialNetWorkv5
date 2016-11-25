<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/ProfessionalInformation.php');

    $objProfessionalInformation=new ProfessionalInformation();
    $objProfessionalInformation->getProfessionalInformation();
}

?>
