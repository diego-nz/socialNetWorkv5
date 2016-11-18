<?php
include ('../model/Address.php');

$estado = $_POST['estado'];
$municipio = $_POST['municipio'];
$colonia = $_POST['colonia'];
$calle = $_POST['calle'];
$numeroInt = $_POST['numInte'];
$numeroExt = $_POST['numExt'];

$objD = new Address();
$objD->addressSignUp($estado,$municipio,$colonia,$calle,$numeroInt,$numeroExt);


?>
