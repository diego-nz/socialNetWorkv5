<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once('../model/WorkingExperience.php');
    $objResume=new WorkingExperience();
    $objResume->getWorkingExperience();
}

?>
