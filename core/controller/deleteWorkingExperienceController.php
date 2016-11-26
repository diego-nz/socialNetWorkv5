<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/WorkingExperience.php");

    $idWorkExperience=$_POST["keyId"];
    $objWorkingExperience=new WorkingExperience($idWorkExperience);
    $objWorkingExperience->deleteWorkingExperience($idWorkExperience);

}

?>
