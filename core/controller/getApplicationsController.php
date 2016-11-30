<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Vacancy.php");
    $objVacancy = new Vacancy();
    $objVacancy -> getIdVacancy();
}

?>
