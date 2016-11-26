<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Language.php");
    $idLanguage=$_POST["keyId"];
    $objLanguage = new Language();
    $objLanguage->deleteLanguage($idLanguage);
}

?>
