<?php

if(isset($_POST["flgF"]) and $_POST["flgF"]=="false"){
    require_once('../model/Course.php');
    $idCourse=$_POST["keyId"];

    $objResume = new Course();
    $objResume -> getIdCourse($idCourse);

}else if(isset($_POST["flg"]) and $_POST["flg"]=="true"){

    require_once('../model/Course.php');
    $idCourse=$_POST["key"];
    $course=$_POST["course"];
    $area=$_POST["courseArea"];
    $start=$_POST["start"];
    $end=$_POST["end"];
    $certified=$_POST["courseCertified"];

    $objCourse = new Course();
    $objCourse -> updateCourse($idCourse,$course,$area,$start,$end,$certified);

}

?>
