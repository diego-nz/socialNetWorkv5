<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Course.php");
    $idCourse=$_POST["keyId"];

    $objCourse = new Course();
    $objCourse->deleteCourse($idCourse);
}

?>
