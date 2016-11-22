<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/AcademicData.php');
    $objResume=new AcademicData();
    $objResume->getAcademicData();
}

?>
