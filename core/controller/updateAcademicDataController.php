<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    echo 1;
}else if(isset($_POST["flgF"]) and $_POST["flgF"]=="false"){
    require_once ('../model/AcademicData.php');

    $idAcademic=$_POST["academicId"];

    $objAcademic = new AcademicData($idAcademic);

    $objAcademic -> getIdAcademicData($idAcademic);
}

?>
