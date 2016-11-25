<?php
    require_once("../model/AcademicData.php");

if(isset($_POST["flg"]) and $_POST["flg"]=="true"){


    $key=$_POST["academicKey"];
    $isStudying=$_POST["isStudying"];
    $grade=$_POST["grade"];
    $schoolName=$_POST["schoolName"];
    $begin=$_POST["begin"];
    $end=$_POST["end"];
    $lastYear=$_POST["lastYear"];

    $objAcademic = new AcademicData();
    $objAcademic -> updateAcademicData($key,$isStudying,$grade,$schoolName,$begin,$end,$lastYear);

}else if(isset($_POST["flgF"]) and $_POST["flgF"]=="false"){

    $idAcademic=$_POST["academicId"];

    $objAcademic = new AcademicData();

    $objAcademic -> getIdAcademicData($idAcademic);
}

?>
