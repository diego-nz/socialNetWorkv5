function enterLogin(e){

    if(e.keyCode==13){
        login();
    }

}

function login(){
    var user=$('#txtUserLogin').val();
    var password=$('#txtPasswordLogin').val();
    if(user.length === 0){
        $('#loginError').html("<div class='alert alert-dismissible alert-warning'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hay algo vacío!</strong> <a href='#' class='alert-link'>Ingresa tu usuario.</a></div>");
        $('#txtUserLogin').css('border-color','#ed620c');
        $('#txtUserLogin').focus();
    }if(password.length === 0){
        $('#loginError').html("<div class='alert alert-dismissible alert-warning'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hay algo vacío!</strong> <a href='#' class='alert-link'>Ingresa tu contraseña.</a></div>");
        $('#txtUserLogin').css('border-color','#ed620c');
        $('#txtPasswordLogin').focus();
    }if(password.length != 0 && user.length != 0){
        $('#loginError').alert('close');
        $.ajax({
            beforeSend:function(){
            $('#modalLogin').attr('class','modal fade out');
            $('#spinner').attr('class','loader');
            },
            url: "core/controller/loginController.php",
            type:"POST",
            data:{
                userName:user,
                pass:password
            },
            success: function(msg){
                if(msg == 1){

                    window.location="?view=login";
                }else if(msg == 2){
                    $('#loginError').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Usuario incorrecto!</strong> <a href='#' class='alert-link'>Intenta de nuevo.</a></div>");
                    $('#txtUserLogin').focus();
                    $('#txtUserLogin').val("");
                    $('#txtUserLogin').css('border-color','#cd0808');
                    $('#txtPasswordLogin').css('border-color','');
                }else if(msg == 3){
                    $('#loginError').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Contraseña incorrecta!</strong> <a href='#' class='alert-link'>Intenta de nuevo.</a></div>");
                    $('#txtPasswordLogin').focus();
                    $('#txtPasswordLogin').val("");
                    $('#txtPasswordLogin').css('border-color','#cd0808');
                    $('#txtUserLogin').css('border-color','');
                }

            },error: function(jqXHR,textstatus,errorThrown){
               // console.error(xhr.status +": "+ xhr.statusText);
                alert("Error: "+jqXHR.resoponseText +" "+textstatus.resoponseText+ " " +errorThrown.resoponseText);
            },
            complete:function(){
                $('#spinner').attr('class','');
            }

        });

    }
}
