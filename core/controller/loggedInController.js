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
                $('#panelContent').html("<div class='list-group'>"
                                    +"<a href='#' class='list-group-item' id='postVacancy'>Publicar <i class='fa fa-sticky-note fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='reviewPost'>Revisar Vacantes Publicadas <i class='fa fa-search fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='companyMessage'>Mensajes <i class='fa fa-envelope fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='scheduleInterview'>Agendar Cita Entrevista <i class='fa fa-calendar-check-o fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='makeCall'>Realizar Videollamada <i class='fa fa-video-camera fa-fw'></i></a>"
                                    +"</div>");
                $.getScript( "core/controller/loggedInCompanyController.js", function( data, textStatus, jqxhr ) {
                    //console.log( data ); // Data returned
                    //console.log( textStatus ); // Success
                    //console.log( jqxhr.status ); // 200
                });
            } else if (msg == 2) {
                //Persona
                $('#panelContent').html("<div class='list-group'>"
                                    +"<a href='#' class='list-group-item' id='MyApplications'>Mis Postulaciones <i class='fa fa-file fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='updateResume'>Actualizar Curriculum <i class='fa fa-vcard fa-fw'></i> </a>"
                                    +"<a href='#' class='list-group-item' id='personMessage'>Mensajes <i class='fa fa-envelope fa-fw'></i></a>"
                                    +"<a href='#' class='list-group-item' id='viewMyInterviews'>Ver citas de entrevista <i class='fa fa-address-book fa-fw'></i></a>"
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
