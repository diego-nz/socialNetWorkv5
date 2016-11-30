<?php
include('../model/VacancyDetail.php');

$id = $_POST['idVacancy'];

$objNum = new VacancyDetail();
$objNum->getNuPersons($id);

?>
