<?php

include ('../model/Contact.php');
    $correo = $_POST['correo'];
    $tel = $_POST['tel'];

    $objContact = new Contact();
    $objContact->contactSignUp($correo,$tel);





?>
