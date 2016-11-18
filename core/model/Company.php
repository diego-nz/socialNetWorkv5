<?php
include ("Connection.php");
class Company extends Connection{

    public function companySignUp($nameCompany,$giro,$rfc){
        //VIFG2335636V4
        $objRFC = new Company();

        if($objRFC->validaRFC($rfc)){

            $query2 = "SELECT * FROM empresa WHERE nombre = '".$nameCompany."'";
        $rs2 = mysqli_query($this->getConnection(),$query2) or die("ERROR ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($rs2)!=0){

            echo 1;

        }else {
            $query3 = "SELECT * FROM empresa WHERE rfc='".$rfc."'";
            $rs3 = mysqli_query($this->getConnection(),$query3);
            if(mysqli_num_rows($rs3)!=0){
                echo 2;
            }else {

                 $query = "SELECT MAX(idUsuario) as idUsu FROM usuario";
        $rs = mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($rs);

        $idUsu = $row['idUsu'];

        $queryInsert = "INSERT INTO empresa VALUES(null,'".$nameCompany."',".$idUsu.",'".$giro."','".$rfc."')";
        mysqli_query($this->getConnection(),$queryInsert) or die ("ERROR ".mysqli_error($this->getConnection()));

                echo 3;
            }
        }

        }else{
            echo 4;
        }



        /*$query2 = "SELECT * FROM empresa WHERE nombre = '".$nameCompany."'";
        $rs2 = mysqli_query($this->getConnection(),$query2) or die("ERROR ".mysqli_error($this->getConnection()));
        if(mysqli_num_rows($rs2)!=0){

            echo 1;

        }else {
            $query3 = "SELECT * FROM empres WHERE rfc='".$rfc."'";
            $rs3 = mysqli_query($this->getConnection(),$query3);

            if(mysqli_num_rows($rs3)!=0){

                echo 2;
            }else {

                 $query = "SELECT MAX(idUsuario) as idUsu FROM usuario";
        $rs = mysqli_query($this->getConnection(),$query) or die("ERROR ".mysqli_error($this->getConnection()));
        $row = mysqli_fetch_array($rs);

        $idUsu = $row['idUsu'];

        $queryInsert = "INSERT INTO empresa VALUES(null,'".$nameCompany."',".$idUsu.",'".$giro."','".$rfc."')";
        mysqli_query($this->getConnection(),$queryInsert) or die ("ERROR ".mysqli_error($this->getConnection()));

                echo 3;
            }
        }

        */


    }


    public function typePersonRFC($typePerson){
        /*Persona fisica*/
        if($typePerson == 1){
            echo '<input type="text" maxlength="13" class="form-control" placeholder="RFC" id="txtRFC" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase();">';
                /*Persona Moral*/
        }else if($typePerson == 2){
           echo '<input type="text" maxlength="12" class="form-control" placeholder="RFC" id="txtRFC" style="text-transform:uppercase;" onkeyup="javascript:this.value=this.value.toUpperCase();">';
        }


    }



    public function validaRFC($valor) {
        $valor = str_replace("-", "", $valor);
        $cuartoValor = substr($valor, 3, 1);
        //RFC Persona Moral.
        if (ctype_digit($cuartoValor) && strlen($valor) == 12) {
            $letras = substr($valor, 0, 3);
            $numeros = substr($valor, 3, 6);
            $homoclave = substr($valor, 9, 3);
            if (ctype_alpha($letras) && ctype_digit($numeros) && ctype_alnum($homoclave)) {
                return true;
            }
        //RFC Persona Física.
        } else if (ctype_alpha($cuartoValor) && strlen($valor) == 13) {
            $letras = substr($valor, 0, 4);
            $numeros = substr($valor, 4, 6);
            $homoclave = substr($valor, 10, 3);
            if (ctype_alpha($letras) && ctype_digit($numeros) && ctype_alnum($homoclave)) {
                return true;
            }
        }else {
            return false;
        }
    }
}
?>

