<?php

if(isset($_POST["keyId"])){
    require_once('../model/AcademicData.php');
    $idAcademic=$_POST["keyId"];

    $objAcademicData= new AcademicData();
    $objAcademicData -> deleteAcademicData($idAcademic);

}

?>
