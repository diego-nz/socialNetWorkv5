<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Course.php");

    $objCourse = new Course();
    $objCourse -> getCourses();
}

?>
