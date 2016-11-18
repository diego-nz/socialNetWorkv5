$(document).on('click', '#closeSession', function() {

    var flag = "true";
    $.ajax({
        beforeSend: function() {
            $('#spinner').attr('class', 'loader');
        },
        url: "core/controller/logoutController.php",
        type: "POST",
        data: {
            action: flag
        },
        success: function(msg) {
            if (msg == 1) {
                window.location.reload();
            }
        }
    });
});

$(document).ready(function() {
    $('#spinner').fadeOut();
    $('#titleMiddle').fadeOut();
    var flag = "true";
    $.ajax({
        url: "core/controller/userTypeController.php",
        type: "POST",
        data: {
            flg: flag
        },
        success: function(msg) {

            if (msg == 1) {
                //Empresa
                $('#panelContent').html("<div class='btn-group-vertical' role='group'>"
                                    +"<button type='button' class='btn btn-white' id='postVacancy'>Publicar</button>"
                                    +"<button type='button' class='btn btn-white' id='reviewPost'>Revisar Vacantes Publicadas</button>"
                                    +"<button type='button' class='btn btn-white' id='companyMessage'>Mensajes</button>"
                                    +"<button type='button' class='btn btn-white' id='scheduleInterview'>Agendar Cita Entrevista</button>"
                                    +"<button type='button' class='btn btn-white' id='makeCall'>Realizar Videollamada</button>"
                                    +"</div>");
                $.getScript( "core/controller/loggedInCompanyController.js", function( data, textStatus, jqxhr ) {
                    //console.log( data ); // Data returned
                    //console.log( textStatus ); // Success
                    //console.log( jqxhr.status ); // 200
                });
            } else if (msg == 2) {
                //Persona
                $('#panelContent').html("<div class='btn-group-vertical' role='group'>"
                                    +"<button type='button' class='btn btn-white' id='MyApplications'>Mis Postulaciones</button>"
                                    +"<button type='button' class='btn btn-white' id='updateResume'>Actualizar Curriculum</button>"
                                    +"<button type='button' class='btn btn-white' id='personMessage'>Mensajes</button>"
                                    +"<button type='button' class='btn btn-white' id='viewMyInterviews'>Ver mis citas de entrevista</button>"
                                    +"</div>");
                $.getScript( "core/controller/loggedInPersonController.js", function( data, textStatus, jqxhr ) {
                    //console.log( data ); // Data returned
                    //console.log( textStatus ); // Success
                    //console.log( jqxhr.status ); // 200
                });
            }
        },
        error: function(textStatus) {
            alert("aqui " + textStatus.responseText);
        },
        complete: function(jqxhr){

        }
    });
});
