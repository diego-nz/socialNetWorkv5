<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/AcademicData.php");

    $isStudying=$_POST["isStudying"];
    $grade=$_POST["grade"];
    $schoolName=$_POST["schoolName"];
    $begin=$_POST["begin"];
    $end=$_POST["end"];
    $lastYear=$_POST["lastYear"];

    $objAcademic = new AcademicData();
    $objAcademic -> addAcademicData($isStudying,$grade,$schoolName,$begin,$end,$lastYear);
}

?>
