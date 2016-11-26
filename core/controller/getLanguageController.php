<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Language.php");
    $objLanguage= new Language();
    $objLanguage->getLanguage();
}

?>
