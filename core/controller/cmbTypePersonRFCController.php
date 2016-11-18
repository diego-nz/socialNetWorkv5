<?php
include ("../model/Company.php");

$typeRFCPerson = $_POST['tipoPersona'];

$objCMB = new Company();
$objCMB->typePersonRFC($typeRFCPerson);

?>
