<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/Resume.php');
    $objResume = new Resume();
    $objResume -> updateCourses();
}

?>
