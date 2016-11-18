<?php
include('../model/Company.php');
$nombreEmpresa = $_POST['nombreEmpresa'];
$giro = $_POST['giroEmpresa'];
$rfc = $_POST['rfcEmpresa'];

$objE = new Company();
$objE->companySignUp($nombreEmpresa,$giro,$rfc);

?>
