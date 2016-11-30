<?php

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){
    require_once("../model/Message.php");
    $objMessage = new Message();
    $objMessage->sendMessage();
}

?>
