<?php
include ('../model/Person.php');

$nombre = $_POST['nombre'];
$apePat = $_POST['apePat'];
$apeMat = $_POST['apeMat'];
$curp = $_POST['curp'];
$fechaNac = $_POST['fecNac'];
$sexo = $_POST['sexo'];

$objP = new Person();
$objP->signUpPerson($nombre,$apePat,$apeMat,$curp,$fechaNac,$sexo);

?>
