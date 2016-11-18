<?php
if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once '../model/User.php';
    $objUser = new User();
    $objUser->userType();
}
?>
