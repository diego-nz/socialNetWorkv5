<?php
include('../model/User.php');
$user = $_POST['user'];
$password = $_POST['password'];

$objU = new User();
$objU->userSignUp($user,$password);
?>
