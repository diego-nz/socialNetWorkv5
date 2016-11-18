<?php
require_once ('../model/Vacancy.php');
if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    $id=$_SESSION["session_id"];
    $objVacancy = new Vacancy();
    $objVacancy->getVacancy($id);
}

?>
