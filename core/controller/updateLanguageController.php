<?php

if(isset($_POST["flgF"]) and $_POST["flgF"]=="false"){
    require_once("../model/Language.php");
    $idLanguage=$_POST["keyId"];
    $objLanguage=new Language();
    $objLanguage->getIdLanguage($idLanguage);

}else if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Language.php");
    $idLanguage=$_POST["key"];
    $name=$_POST["language"];
    $level=$_POST["level"];
    $certified=$_POST["certified"];
    $objLanguage=new Language();
    $objLanguage->updateLanguage($idLanguage,$name,$level,$certified);
}

?>
