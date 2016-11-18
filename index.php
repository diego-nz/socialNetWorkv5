<?php
//change to require
require('core/core.php');
    if(isset($_GET['view'])){
        if(file_exists('core/controller/'.strtolower($_GET['view']).'Controller.php')){
                include('core/controller/'.strtolower($_GET['view']).'Controller.php');
        }else{
            include('core/controller/errorController.php');
        }
    }else{
        include ('core/controller/indexController.php');
    }

?>
