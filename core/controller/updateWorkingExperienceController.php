<?php

if(isset($_POST["flgF"]) and $_POST["flgF"]=="false"){

require_once("../model/WorkingExperience.php");
    $idWorkingExperience=$_POST["keyId"];

    $objWorkingExperience= new WorkingExperience();
    $objWorkingExperience->getIdWorkingExperience($idWorkingExperience);

}else if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/WorkingExperience.php");

    $idWorkingExperience=$_POST["key"];
    $isWorking=$_POST["isWorkingNow"];
    $lastWork=$_POST["lastWork"];
    $description=$_POST["desc"];
    $timeWorking=$_POST["timeWorking"];

    $objWorkingExperience = new WorkingExperience();
    $objWorkingExperience->updateWorkingExperience($idWorkingExperience,$isWorking,$lastWork,$description,$timeWorking);
}
?>
