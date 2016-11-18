<?php
if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
  require_once ("../model/VacancyDetail.php");
    $data1=$_POST["vId"];
    $objVacancy = new VacancyDetail();
    $objVacancy->addVacancyDetail($data1);
}
?>
