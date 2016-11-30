$(document).on('click', '#postVacancy', function() {
    $('#middlePanel').empty();

    $('#middlePanel').fadeIn();
    //$('#middleTitle').text("Nueva Vacante");
    $('#middlePanel').html("<div id='datos' role='form'>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtName'>Nombre</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Perfil para la vacante' name='txtName' id='txtName'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtVacancyPost'>Perfil </label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Cargo a desempeñar' id='txtVacancyPost' name='txtVacancyPost'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtTypeWorking'>Tipo de jornada</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Jornada'id='txtTypeWorking' name='txtTypeWorking'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtVacancies'>No. Vacantes</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='number' min='0' class='form-control' placeholder='No. vacantes' id='txtVacancies' name='txtVacancies'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtExperience'>Experiencia</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text'class='form-control' placeholder='Si(tiempo)/No' id='txtExperience' name='txtExperience'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtWorkingPlace'>Zona</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text'class='form-control' placeholder='Municipio/Estado' id='txtWorkingPlace' name='txtWorkingPlace'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                    +"<label class='col-xs-2 col-form-label' for='txtWage'>Salario</label>"
                                            +"<div class='col-xs-10'>"
                                            +"<div class='input-group'>"
                                            +"<span class='input-group-addon'>$</span>"
                                            +"<input type='text' placeholder='9000'id='txtWage' name='txtWage' class='form-control'>"
                                            +"<span class='input-group-addon'>.00</span>"
                                            +"</div>"
                                            +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtAcoments'>Comentarios</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<textArea rows='3' class='form-control' placeholder='Prestaciones/Beneficios/Horarios' id='txtAcoments' name='txtAcoments'></textArea>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtExpirationDate'>Fecha expiración</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Termina el día' id='txtExpirationDate' name='txtExpirationDate'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<input type='submit' value='enviar' class='btn btn-black' id='savePost' name='savePost'> "
                                +"</div>");
});

$(document).on('focus','#txtExpirationDate',function(){
     $('#txtExpirationDate').datepicker({
        dateFormat: "yy/mm/dd",
         minDate:0,
         //changeYear:"false",
        //yearRange:"2016: ",
        //changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        //gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
     });
});


$(document).on('click', '#savePost', function() {
    var vacancyName = $('#txtName').val();
    var vacancyPost = $('#txtVacancyPost').val();
    var typeWorking = $('#txtTypeWorking').val();
    var numberVacancies = $('#txtVacancies').val();
    var experience = $('#txtExperience').val();
    var workingPlace = $('#txtWorkingPlace').val();
    var wage = $('#txtWage').val();
    var comments = $('#txtAcoments').val();
    var expirationDate = $('#txtExpirationDate').val();

    var flag1 = (vacancyName.trim == "" || vacancyName.length === 0) ? 0 : 1;
    var flag2 = (vacancyPost.trim == "" || vacancyPost.length === 0) ? 0 : 1;
    var flag3 = (typeWorking.trim == "" || typeWorking.length === 0) ? 0 : 1;
    var flag4 = (numberVacancies.trim == "" || numberVacancies.length === 0) ? 0 : 1;
    var flag5 = (experience.trim == "" || experience.length === 0) ? 0 : 1;
    var flag6 = (wage.trim == 0) ? 0 : 1;
    var flag7 = (comments.trim == "" || comments.length === 0) ? 0 : 1;
    var flag8 = (expirationDate.trim == "" || expirationDate.length === 0) ? 0 : 1;
    var flag9 = (workingPlace.trim == "" || workingPlace.length === 0) ? 0 : 1;
    if (flag1 == 1 && flag2 == 1 && flag3 == 1 && flag4 == 1 && flag5 == 1 && flag6 == 1 && flag7 == 1 && flag8 == 1 && flag9 == 1) {
        var flag="true";
        $.ajax({
            beforeSend: function() {
                $('#spinner').attr('class', 'loader');
            },
            url: "core/controller/addVacancyController.php",
            type: "POST",
            data: {
                f:flag,
                vacante: vacancyName,
                puesto: vacancyPost,
                jornada: typeWorking,
                vacantes: numberVacancies,
                experiencia: experience,
                zona: workingPlace,
                salario: wage,
                comentarios: comments,
                expira: expirationDate
            },
            success: function(msg) {

                $('#middlePanel').empty();

                $('#middlePanel').html("<div class='alert alert-dismissible alert-success'>"
                                       +"<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Sus datos han sido guardados</strong>"
                                       +"<a href='#' class='alert-link'>Correctamente</a></div>");
                $('#middlePanel').html("");
                $('#middleTitle').text("");
            },
            error: function(jqXHR, status, error) {
                alert("Error " + jqXHR + " " + status + " " + error);
            }
        });
    }else{

        alertify.alert("No debe dejar ningun campo vacio");

    }
});

$(document).on('click', '#reviewPost', function() {

    $('#middlePanel').empty();
    $.ajax({
        url:'core/controller/checkVacancyCompanyController.php',
        dataType:'html',
        success:function(data){
            if(data == 1){
                 $('#middlePanel').html("<div class='alert alert-dismissible alert-danger'>"
                                       +"<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡UPS! Parece que aun no tienes vacantes disponibles</strong>"
                                       +"<a href='#' class='alert-link'> No esperes mas, por favor agrega una nueva vacante </a></div>");
            }else{
                $('#middlePanel').html(data);

            }
        }

    });
});

//tableDetailVacancy Tabla para darle evento

$(document).on('click','#tableDetailVacancy tbody tr',function(){
    var nTds = $('td', this);
    var idVacancy;
    idVacancy = $(nTds[0]).text();
    //alert(idVacancy);

    if(idVacancy == 'Puesto'){

    }else{
    $.ajax({
        type: 'POST',
        url: 'core/controller/numPostVacancyController.php',
        data:{
            idVacancy:idVacancy
        },success:function(data){

            if(data == 1){
         alertify.alert("Parece que aun no hay postulantes en tu vacante");

            }else{
               alertify.alert(data);
            }
        }
    });
    }
});

$(document).on('click','#scheduleInterview',function(){
    alert();
});

