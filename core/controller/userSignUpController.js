$(document).ready(function(){
    //$("#secondLog").children().attr("disabled","disabled");
    //$("#lastLog").children().attr("disabled","disabled");
    $('#txtNumTel').numeric();

});

$(document).on('click','#li',function(){
    $('#modal-body').load('');
})

$(document).on('focus','#txtFechaNac',function(){
     $('#txtFechaNac').datepicker({

        dateFormat: "yy/mm/dd",
         changeYear:"true",
        yearRange:"1950: ",
        changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
     });
});

$(document).on('change','#cmbTipoPersona',function(){
    var tipoPersona = $('#cmbTipoPersona').val();

    $.ajax({
        url:'core/controller/cmbTypePersonRFCController.php',
        type:'POST',
        data:{tipoPersona:tipoPersona},
        success:function(data){
            $('#typePersonRFCDiv').html(data);
        }
    });
});

$(document).on('click','#fistLog',function(){

    var email = $('#txtMail').val();
    var repEmail = $('#txtRepMail').val();
    var tel = $('#txtNumTel').val();
    //alert(email+" "+repEmail+" "+tel);

    if(email.length == 0 || $('#txtMail').val().trim() == ''){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtMail').focus();
        $('#txtMail').css('border-color','#cd0808');

    }else if(repEmail.length == 0 || $('#txtRepMail').val().trim() == ''){
         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtRepMail').focus();
        $('#txtRepMail').css('border-color','#cd0808');
    }else if(tel.length == 0 || $('#txtNumTel').val().trim() == ''){

         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumTel').focus();
        $('#txtNumTel').css('border-color','#cd0808');

    }else if(email.indexOf('@', 0) == -1 || email.indexOf('.', 0) == -1){

        $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo incorrecto!</strong> <a href='#' class='alert-link'>Por favor, ingrese su correo nuevamente.</a></div>");
            $('#txtMail').focus();
        $('#txtMail').css('border-color','#cd0808');

    }else if(repEmail.indexOf('@', 0) == -1 || repEmail.indexOf('.', 0) == -1){

         $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo incorrecto!</strong> <a href='#' class='alert-link'>Por favor, ingrese su correo nuevamente.</a></div>");
            $('#txtRepMail').focus();
        $('#txtRepMail').css('border-color','#cd0808');

    }else if(email!=repEmail || repEmail!=email){

        $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Los correos no son iguales!</strong> <a href='#' class='alert-link'>Por favor, verifique que sus correos coincidan.</a></div>");

                $('#txtMail').focus();
                $('#txtRepMail').focus();

                $('#txtMail').css('border-color','#cd0808');
                 $('#txtRepMail').css('border-color','#cd0808');

    }else if(tel.length<10){

                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡El telefono es incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que su telefono.</a></div>");

        $('#txtNumTel').focus();
        $('#txtNumTel').css('border-color','#cd0808');

    }else{
        $('#txtMail').css('border-color','#01DF01');
                $('#txtRepMail').css('border-color','#01DF01');
                $('#txtNumTel').css('border-color','#01DF01');
    $.ajax({
        url:"core/controller/contactSignUpController.php",
        type:'POST',
        data:{correo:email,tel:tel},
        success:function(data){
            if(data == 1){
                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correo Existente!</strong> <a href='#' class='alert-link'>Por favor, ingresa otro correo.</a></div>");
                $('#txtMail').val("");
                $('#txtRepMail').val("");

                $('#txtMail').focus();
                $('#txtRepMail').focus();

                $('#txtMail').css('border-color','#cd0808');
                 $('#txtRepMail').css('border-color','#cd0808');

            }else if(data == 2){
                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Numero Telefonico Existente!</strong> <a href='#' class='alert-link'>Por favor, ingresa otro numero.</a></div>");
                $('#txtNumTel').val("");
                $('#txtNumTel').focus();
                $('#txtNumTel').css('border-color','#cd0808');

            }else if(data == 3){

                $('#txtMail').val("");
                $('#txtRepMail').val("");
                $('#txtNumTel').val("");

                $('#txtMail').css('border-color','#01DF01');
                $('#txtRepMail').css('border-color','#01DF01');
                $('#txtNumTel').css('border-color','#01DF01');

                $('#infoErrorContacto').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correcto!</strong> <a href='#' class='alert-link'>Tus datos han sido enviados correctamente</a></div>");
                $("#divPrimeraParte").children().attr("disabled","disabled");
            }
        }
    });
    }
});


/*Controla la segunda parte de el registro de usuarios direccion*/
$(document).on('click','#secondLogBtn',function(){

    var estado = $('#txtState').val();
    var municipio = $('#txtMunicipio').val();
    var colonia = $('#txtColonia').val();
    var calle = $('#txtCalle').val();
    var numInte = $('#txtNumInt').val();
    var numExt = $('#txtNumExt').val();

    if(estado.length == 0 || $('#txtState').val().trim == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtState').focus();
        $('#txtState').css('border-color','#cd0808');

    }else if(municipio.length == 0 || $('#txtMunicipio').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtMunicipio').focus();
        $('#txtMunicipio').css('border-color','#cd0808');

    }else if(colonia.length == 0 || $('#txtColonia').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtColonia').focus();
        $('#txtColonia').css('border-color','#cd0808');

    }else if(calle.length == 0 || $('#txtCalle').val().trim() == ''){

         $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtCalle').focus();
        $('#txtCalle').css('border-color','#cd0808');

    }else if(numInte.length == 0 || $('#txtNumInt').val().trim() == ''){

         $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumInt').focus();
        $('#txtNumInt').css('border-color','#cd0808');

    }else if(numExt.length == 0 || $('#txtNumExt').val().trim() == ''){

        $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtNumExt').focus();
        $('#txtNumExt').css('border-color','#cd0808');

    }else{
        $('#txtState').css("border-color",'#01DF01');
    $('#txtMunicipio').css("border-color",'#01DF01');
    $('#txtColonia').css("border-color",'#01DF01');
    $('#txtCalle').css("border-color",'#01DF01');
    $('#txtNumInt').css("border-color",'#01DF01');
    $('#txtNumExt').css("border-color",'#01DF01');
    $.ajax({
     url:"core/controller/addressSignUpController.php",
        type:"POST",
        data:{estado:estado,
              municipio:municipio,
              colonia:colonia,
              calle:calle,
              numInte:numInte,
              numExt:numExt},

        success:function(data){
                if(data == 1){
    $('#txtState').val("");
    $('#txtMunicipio').val("");
    $('#txtColonia').val("");
    $('#txtCalle').val("");
    $('#txtNumInt').val("");
    $('#txtNumExt').val("");

    $('#txtState').css("border-color",'#01DF01');
    $('#txtMunicipio').css("border-color",'#01DF01');
    $('#txtColonia').css("border-color",'#01DF01');
    $('#txtCalle').css("border-color",'#01DF01');
    $('#txtNumInt').css("border-color",'#01DF01');
    $('#txtNumExt').css("border-color",'#01DF01');

    $('#infoErrorDireccion').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correcto!</strong> <a href='#' class='alert-link'>Tus datos han sido enviados correctamente</a></div>");
                $("#secondLog").children().attr("disabled","disabled");

                }
        }
    });
    }
    });



$(document).on('click','#btnSignUpUser',function(){
    var user = $('#txtUserReg').val();
    var password = $('#txtPassword').val();
    var repPassword = $('#txtRepPassword').val();


    if(user.length == 0 || $('#txtUserReg').val().trim() == ''){

         $('#infoErrorUser').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtUserReg').focus();
        $('#txtUserReg').css('border-color','#cd0808');

    }else if(password.length == 0 ||  $('#txtPassword').val().trim() == ''){

         $('#infoErrorUser').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtPassword').focus();
        $('#txtPassword').css('border-color','#cd0808');

    }else if(repPassword.length == 0 || $('#txtRepPassword').val().trim() == ''){

        $('#infoErrorUser').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtRepPassword').focus();
        $('#txtRepPassword').css('border-color','#cd0808');

    }else if(password!=repPassword){

        $('#infoErrorUser').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Las contraseñas no coinciden!</strong> <a href='#' class='alert-link'>Por favor, ingrese nuevamente tu contraseña</a></div>");

        $('#txtRepPassword').focus();
        $('#txtPassword').focus();

        $('#txtPassword').css('border-color','#cd0808');
        $('#txtRepPassword').css('border-color','#cd0808');

    }else{
$('#txtUserReg').css("border-color",'#01DF01');
                    $('#txtPassword').css("border-color",'#01DF01');
                    $('#txtRepPassword').css("border-color",'#01DF01');
    $.ajax({
        url:"core/controller/userSignUpController.php",
        type:'POST',
        data:{
            user:user,
            password:password
        },
        success:function(data){
                if(data == 1){

                     $('#infoErrorUser').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Usuario existente!</strong> <a href='#' class='alert-link'>Por favor, elija otro nombre de usuario.</a></div>");
                    $('#txtUserReg').val();
            $('#txtUserReg').focus();
        $('#txtUserReg').css('border-color','#cd0808');

                }if(data == 2){
                     $('#txtUserReg').val("");
                    $('#txtPassword').val("");
                    $('#txtRepPassword').val("");

                     $('#txtUserReg').css("border-color",'#01DF01');
                    $('#txtPassword').css("border-color",'#01DF01');
                    $('#txtRepPassword').css("border-color",'#01DF01');

                    $('#infoErrorUser').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Correcto!</strong> <a href='#' class='alert-link'>Tus datos han sido enviados correctamente</a></div>");

                    $("#signUpUserDiv").children().attr("disabled","disabled");
                }
        }

});

    }

    });


$(document).on('click','#lastLogBtn',function(){
    var type = $('#type').val();
    if(type == 1){

        var empresa = $('#nombreEmpresa').val();
        var giro = $('#giroEmpresa').val();
        var rfc = $('#txtRFC').val();
        var cmbType = $('#cmbTipoPersona').val();

         if(empresa.length == 0 || $('#nombreEmpresa').val().trim() == ''){

             $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#nombreEmpresa').focus();
        $('#nombreEmpresa').css('border-color','#cd0808');

          }else if(giro.length == 0 || $('#giroEmpresa').val().trim() == ''){

               $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#giroEmpresa').focus();
        $('#giroEmpresa').css('border-color','#cd0808');

          }else if(cmbType == 0){

              $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#cmbTipoPersona').focus();
        $('#cmbTipoPersona').css('border-color','#cd0808');

          }else if(rfc.length === 0 || $('#txtRFC').val().trim == ''){

              $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");
            $('#txtRFC').focus();
        $('#txtRFC').css('border-color','#cd0808');

          }else if(cmbType == 1){
              $('#nombreEmpresa').css('border-color','#01DF01');
                    $('#giroEmpresa').css('border-color','#01DF01');
                    $('#txtRFC').css('border-color','#01DF01');
                    $('#cmbTipoPersona').css('border-color','#01DF01');
              if(rfc.length === 13){
                  $.ajax({
                url:'core/controller/companySignUpController.php',
                type:'POST',
                data:{nombreEmpresa:empresa, giroEmpresa:giro,rfcEmpresa:rfc},
                   success:function(data){
                if(data == 1){
                     $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Esta empresa ya esta registrada!</strong> <a href='#' class='alert-link'>Por favor, ingrese otro nombre.</a></div>");
                    $('#nombreEmpresa').val("");
            $('#nombreEmpresa').focus();
        $('#nombreEmpresa').css('border-color','#cd0808');
                }if(data == 2){
                    $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Este RFC ya esta registrado!</strong> <a href='#' class='alert-link'>Por favor, ingrese otro RFC.</a></div>");
                    $('#txtRFC').val("");
            $('#txtRFC').focus();
        $('#txtRFC').css('border-color','#cd0808');
                }if(data == 3){
                    $('#nombreEmpresa').val("");
                    $('#giroEmpresa').val("");
                    $('#txtRFC').val("");
                    $('#cmbTipoPersona').val(0);

                    $('#nombreEmpresa').css('border-color','#01DF01');
                    $('#giroEmpresa').css('border-color','#01DF01');
                    $('#txtRFC').css('border-color','#01DF01');
                    $('#cmbTipoPersona').css('border-color','#01DF01');

                     $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Has terminado tu registro con exito!</strong> <a href='#' class='alert-link'>Ahora puedes iniciar iniciar sesion</a></div>");
                    $("#lastLog").children().attr("disabled","disabled");
                }if(data == 4){
                    $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡RFC incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que sea correcto.</a></div>");

            $('#txtRFC').focus();
            $('#txtRFC').css('border-color','#cd0808');
                }
            }
            });

              }else{
                   $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡RFC incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que sea correcto.</a></div>");

            $('#txtRFC').focus();
            $('#txtRFC').css('border-color','#cd0808');
              }

          }else if(cmbType == 2){
              $('#nombreEmpresa').css('border-color','#01DF01');
                    $('#giroEmpresa').css('border-color','#01DF01');
                    $('#txtRFC').css('border-color','#01DF01');
                    $('#cmbTipoPersona').css('border-color','#01DF01');
              if(rfc.length === 12){
                   $.ajax({
                url:'core/controller/companySignUpController.php',
                type:'POST',
                data:{nombreEmpresa:empresa, giroEmpresa:giro,rfcEmpresa:rfc},
                   success:function(data){
                if(data == 1){
                     $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Esta empresa ya esta registrada!</strong> <a href='#' class='alert-link'>Por favor, ingrese otro nombre.</a></div>");
                    $('#nombreEmpresa').val("");
            $('#nombreEmpresa').focus();
        $('#nombreEmpresa').css('border-color','#cd0808');
                }if(data == 2){
                    $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Este RFC ya esta registrado!</strong> <a href='#' class='alert-link'>Por favor, ingrese otro RFC.</a></div>");
                    $('#txtRFC').val("");
            $('#txtRFC').focus();
        $('#txtRFC').css('border-color','#cd0808');
                }if(data == 3){
                    $('#nombreEmpresa').val("");
                    $('#giroEmpresa').val("");
                    $('#txtRFC').val("");
                    $('#cmbTipoPersona').val(0);

                    $('#nombreEmpresa').css('border-color','#01DF01');
                    $('#giroEmpresa').css('border-color','#01DF01');
                    $('#txtRFC').css('border-color','#01DF01');
                    $('#cmbTipoPersona').css('border-color','#01DF01');

                     $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Has terminado tu registro con exito!</strong> <a href='#' class='alert-link'>Ahora puedes iniciar iniciar sesion</a></div>");
                    $("#lastLog").children().attr("disabled","disabled");
                }if(data == 4){
                    $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡RFC incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que sea correcto.</a></div>");

            $('#txtRFC').focus();
            $('#txtRFC').css('border-color','#cd0808');
                }
            }
            });
              }else{
                     $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡RFC incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verifique que sea correcto.</a></div>");

            $('#txtRFC').focus();
            $('#txtRFC').css('border-color','#cd0808');
              }
          }

    }else if(type == 2){
        var nombre = $('#txtNombrePer').val();
        var apePat = $('#txtApePat').val();
        var apeMat = $('#txtApeMat').val();
        var curp = $('#txtCurp').val();
        var fecNac = $('#txtFechaNac').val();
        var sexo = $('#cmbSexo').val();


        //alert(nombre+" "+apePat+" "+apeMat+" "+curp+" "+fecNac+" "+sexo);

        if(nombre.length == 0 || $('#txtNombrePer').val().trim == ''){
            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#txtNombrePer').focus();
            $('#txtNombrePer').css('border-color','#cd0808');

        }else if(apePat.length == 0 || $('#txtApePat').val().trim == ''){

            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#txtApePat').focus();
            $('#txtApePat').css('border-color','#cd0808');

        }else if(apeMat.length == 0 || $('#txtApeMat').val().trim == ''){

            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#txtApeMat').focus();
            $('#txtApeMat').css('border-color','#cd0808');

        }else if(curp.length == 0 || $('#txtCurp').val().trim == ''){

              $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#txtCurp').focus();
            $('#txtCurp').css('border-color','#cd0808');


        }else if(fecNac.length == 0 || $('#txtFechaNac').val().trim == ''){

            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#txtFechaNac').focus();
            $('#txtFechaNac').css('border-color','#cd0808');

        }else if(sexo == 0){
            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡No debe dejar ningun campo vacio!</strong> <a href='#' class='alert-link'>Por favor, ingrese todos los datos.</a></div>");

              $('#cmbSexo').focus();
            $('#cmbSexo').css('border-color','#cd0808');

        }else {
            $('#txtNombrePer').css("border-color",'#01DF01');
                        $('#txtApePat').css("border-color",'#01DF01');
                        $('#txtApeMat').css("border-color",'#01DF01');
                        $('#txtCurp').css("border-color",'#01DF01');
                        $('#txtFechaNac').css("border-color",'#01DF01');
                        $('#cmbSexo').css("border-color",'#01DF01');
            if(curp.length === 18){

            if(curp.match(/^([a-z]{4})([0-9]{6})([a-z]{6})([0-9]{2})$/i)){

            $.ajax({
                url:'core/controller/signUpPersonController.php',
                type:'POST',
                data:{
                    nombre:nombre,
                    apePat:apePat,
                    apeMat:apeMat,
                    curp:curp,
                    fecNac:fecNac,
                    sexo:sexo
                },success:function(data){
                    if(data == 1){
                         $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Curp Registrado!</strong> <a href='#' class='alert-link'>Por favor, verique que sea correcto.</a></div>");
                $('#txtCurp').val("");
              $('#txtCurp').focus();
            $('#txtCurp').css('border-color','#cd0808');
                    }if(data == 2){

                        $('#txtNombrePer').val("");
                        $('#txtApePat').val("");
                        $('#txtApeMat').val("");
                        $('#txtCurp').val("");
                        $('#txtFechaNac').val("");
                        $('#cmbSexo').val(0);

                        $('#txtNombrePer').css("border-color",'#01DF01');
                        $('#txtApePat').css("border-color",'#01DF01');
                        $('#txtApeMat').css("border-color",'#01DF01');
                        $('#txtCurp').css("border-color",'#01DF01');
                        $('#txtFechaNac').css("border-color",'#01DF01');
                        $('#cmbSexo').css("border-color",'#01DF01');

                        $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Has terminado tu registro con exito!</strong> <a href='#' class='alert-link'>Ahora puedes iniciar iniciar sesion</a></div>");
                    $("#lastLog").children().attr("disabled","disabled");

                    }
                }

            });

        }else{
            $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Curp incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verique que sea correcto.</a></div>");

              $('#txtCurp').focus();
            $('#txtCurp').css('border-color','#cd0808');
        }

        }else{
             $('#infoErrorUltimoReg').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>x</button><strong>¡Curp incorrecto!</strong> <a href='#' class='alert-link'>Por favor, verique que sea correcto.</a></div>");

              $('#txtCurp').focus();
            $('#txtCurp').css('border-color','#cd0808');
        }







        }


    }
});
