<?php
if(isset($_POST["action"])){
    $logout=$_POST["action"];
    if($logout=="true"){
        session_start();
        session_unset();
        session_destroy();
        echo 1;
    }
}else{
    include ('view/index/index.php');
}
?>
