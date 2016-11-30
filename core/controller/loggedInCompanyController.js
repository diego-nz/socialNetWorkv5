window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia ||
function() {
    alert('Su navegador no soporta navigator.getUserMedia().');
};
window.datosVideo = {
    'StreamVideo': null,
    'url': null
}
$(document).on('click', '#postVacancy', function() {
    $('#middlePanel').empty();

    $('#middlePanel').fadeIn();
    //$('#middleTitle').text("Nueva Vacante");
    $('#middlePanel').html("<div id='datos' role='form'>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtName'>Perfil</label>"
                                        +"<div class='col-xs-10'>"
                                            +"<select class='form-control' id='txtName' name='txtName'>"
                                                    +"<option value='0'>Selecciona el área </option>"
                                                    +"<option value='Aeronáutica'>Aeronáutica</option>"
                                                    +"<option value='Arquitectura'>Arquitectura</option>"
                                                    +"<option value='Biotecnología'>Biotecnología</option>"
                                                    +"<option value='Ciencias de la Tierra'>Ciencias de la Tierra</option>"
                                                    +"<option value='Ciencias navales'>Ciencias navales</option>"
                                                    +"<option value='Computación y sistemas'>Computación y sistemas</option>"
                                                    +"<option value='Diseño'>Diseño</option>"
                                                    +"<option value='Ingeniería ambiental'>Ingeniería ambiental</option>"
                                                    +"<option value='Ingeniería bioquímica'>Ingeniería bioquímica</option>"
                                                    +"<option value='Ingeniería civil'>Ingeniería civil</option>"
                                                    +"<option value='Ingeniería de los transportes'>Ingeniería de los transportes</option>"
                                                    +"<option value='Ingeniería eléctrica y electrónica'>Ingeniería eléctrica y electrónica</option>"
                                                    +"<option value='Ingeniería en control, instrumentación y procesos'>Ingeniería en control, instrumentación y procesos</option>"
                                                    +"<option value='Ingeniería en telecomunicaciones'>Ingeniería en telecomunicaciones</option>"
                                                    +"<option value='Ingeniería en telemática'>Ingeniería en telemática</option>"
                                                    +"<option value='Ingeniería energética'>Ingeniería energética</option>"
                                                    +"<option value='Ingeniería extractiva y metalúrgica'>Ingeniería extractiva y metalúrgica</option>"
                                                    +"<option value='Ingeniería física'>Ingeniería física</option>"
                                                    +"<option value='Ingeniería hidráulica'>Ingeniería hidráulica</option>"
                                                    +"<option value='Ingeniería industrial'>Ingeniería industrial</option>"
                                                    +"<option value='Ingeniería mecánica y eléctrica'>Ingeniería mecánica y eléctrica</option>"
                                                    +"<option value='Ingeniería oceánica'>Ingeniería oceánica</option>"
                                                    +"<option value='Ingeniería química'>Ingeniería química</option>"
                                                    +"<option value='Ingeniería textil'>Ingeniería textil</option>"
                                                    +"<option value='Ingeniería topográfica'>Ingeniería topográfica</option>"
                                                    +"<option value='Planeación'>Planeación</option>"
                                                    +"<option value='Química industrial'>Química industrial</option>"
                                                    +"<option value='Urbanismo'>Urbanismo</option>"
                                            +"</select>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtVacancyPost'>Cargo</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Cargo a desempeñar' id='txtVacancyPost' name='txtVacancyPost'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<div class='form-group row'>"
                                        +"<label class='col-xs-2 col-form-label' for='txtTypeWorking'>Tipo de jornada</label>"
                                        +"<div class='col-xs-10'>"
                                        +"<input type='text' class='form-control' placeholder='Contrato/Completa/Media jornada/Becario'id='txtTypeWorking' name='txtTypeWorking'>"
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
                                        +"<input type='text' class='form-control' id='txtExpirationDate' name='txtExpirationDate'>"
                                    +"</div>"
                                    +"</div>"
                                    +"<input type='submit' value='guardar' class='btn btn-success' id='savePost' name='savePost'> "
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

    var flag1 = (vacancyName == 0) ? 0 : 1;
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

                alertify.alert("Su vacante ha sido guardados y publicada correctamente");
                $('#middlePanel').html("");
                $('#middleTitle').text("");
            },
            error: function(jqXHR, status, error) {
                //alert("Error " + jqXHR + " " + status + " " + error);
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
                                       +"<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡OPS! Parece que aun no tienes vacantes disponibles</strong>"
                                       +"<a href='#' class='alert-link'> No esperes más, por favor agrega una nueva vacante. </a></div>");
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

$(document).on('click','#makeCall',function(){
    $('#middlePanel').empty();

    $('#stateMessage').html('<table text-align="center"></td><td><input type="button" id="btnStartVideo" class="btn btn-success" value="Iniciar"/></td><td><input type="button" id="btnFinishVideo" class="btn btn-error" value="Detener"/></td></tr></table>');

    $('#middlePanel').html("<video id='camara' autoplay controls width='525' height='350'></video>");


});

$(document).on('click','#btnStartVideo', function() {

    //Pedimos al navegador que nos da acceso a
    //algún dispositivo de video (la webcam)
    navigator.getUserMedia({
        'audio': true,
        'video': true
    }, function(streamVideo) {
        datosVideo.StreamVideo = streamVideo;
        datosVideo.url = window.URL.createObjectURL(streamVideo);
        jQuery('#camara').attr('src', datosVideo.url);

    }, function() {
        alert('No fue posible obtener acceso a la cámara.');
    });

});

$(document).on('click','#btnFinishVideo',function(){
    window.location.reload();
});


$(document).on('click','#scheduleInterview',function(){
    alert();
});

