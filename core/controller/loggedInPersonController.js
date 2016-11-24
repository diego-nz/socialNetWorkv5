$(document).ready(function(){

    var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/loadVacanciesController.php",
       type:"POST",
       data:{flg:flag},
        success: function (msg){
            if(msg == 2){
                $('#middleTitle').text("Algunos empleos para ti");
                $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡No se han encontrado vacantes!</strong> <a href='#' class='alert-link'>Pero no te precupes seguiremos buscando la mejor opcion para ti</a></div>");
            }else{
                $('#middleTitle').text("Algunos empleos para ti");
                $('#middlePanel').html(msg);
            }
        },
        error: function (jqXHR,status,error) {
            alert(jqXHR+status+error);
        },complete: function (jqXHR,status){
            $('#postulateToVacancy').on({
                mouseenter: function(){
                    $('#postulateMsg').fadeIn(500).html("Postularme");
                },
                mouseleave: function(){
                    $('#postulateMsg').fadeOut(100).html("");
                }
            });
        }
   });

});



$(document).on('click','#postulateToVacancy',function(){
    var flag="true";
    var vacancyId=$('#txtIdVacancy').val();
    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/vacancyPostulateController.php",
        type:"POST",
        data: {flg:flag,vId:vacancyId},
        success: function(msg){
            $('#stateMessage').html("<div class='alert alert-dismissible alert-success'>"
                                       +"<button type='button' class='close' data-dismiss='alert'>&times;</button><strong>Se ha postulado</strong>"
                                       +"<a href='#' class='alert-link'>correctamente a la vacante.</a></div>");
        },
        error: function (jqXHR,status,error){
            alert(jqXHR+status+error);
        }
    });
});

   $(document).on('click','#updateResume',function(){
       $('#stateMessage').html("");
       $('#middlePanel').html("");
       $('#middlePanel').html("<div class='list-group'>"
                                        +"<a href='#' id='schoolingInformation' class='list-group-item active' role='button'>Información Académica </a>"
                                        +"<div id='displayAcademic'></div>"
                                        +"<a href='#' id='professionalInformation' class='list-group-item'>Información Profesionales</a>"
                                        +"<div id='displayProfesional'></div>"
                                        +"<a href='#' id='courses' class='list-group-item'>Cursos</a>"
                                        +"<div id='displayCourses'></div>"
                                        +"<a href='#' id='workingExperience' class='list-group-item'>Experiencia Laboral</a>"
                                        +"<div id='displayWork'></div>"
                                        +"<a href='#' id='languages' class='list-group-item'>Idiomas</a>"
                                        +"<div id='displayLanguage'></div>"
                                        +"<a href='#' id='otherInformation' class='list-group-item'>Otros Datos</a>"
                                        +"<div id='displayOther'></div>"
                                +"</div>");
   });

$(document).on('click','#schoolingInformation',function(){
    var flag="true";
    $.ajax({
        beforeSend:function(){
            $('#spinner').attr('class','loader');
        },
        url: "core/controller/getAcademicDataController.php",
        type: "POST",
        data: {flg:flag},
        success: function(msg){
            $('#displayAcademic').html(msg);
        },
        error: function(jqXHR,error,status){

        },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
            $('#displayAcademic').append("<hr><button class='btn-xs btn-success' id='addAcademicBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
        }
    });
});

$(document).on('click','.updateAcademic',function(){
    var academicKey=$(this).attr('id');
    var flag="false";
    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateAcademicDataController.php",
        type: "POST",
        data: {flgF:flag,academicId:academicKey},
        success: function(msg){
            $('#myModalTitle').text("Información escolar");
            $('#modalBodyUpdate').html(msg);
            var studying=$('#txtIsStudying').val();
            if(studying=="Si" || studying=="si"){
                $('#radIsStudyingY').attr('checked',true);

            }else if(studying=="No" || studying=="no"){
                $('#radIsStudyingN').attr('checked',true);
            }
        },
        error: function(jqXHR,error,status){
            console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });

});


$(document).on('click','#saveChangesBtn',function(){
    var flag="true";
    var actualGrade=$('#txtActualGrade').val();
    var school=$('#txtSchoolName').val();
    var schoolStart=$('#txtSchoolStart').val();
    var schoolFinish=$('#txtSchoolEnd').val();
    var lastGrade=$('#txtMaxGrade').val();
    var flag2="false";

    $('#modalMessage').html("");
    $('#txtActualGrade').focus().css('border-color','');
    $('#txtSchoolName').css('border-color','');
    $('#txtSchoolStart').css('border-color','');
    $('#txtSchoolEnd').css('border-color','');
    $('#txtMaxGrade').css('border-color','');

    if($('#txtActualGrade').val().trim()==''){
        $('#txtActualGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }
    else if($('#txtSchoolName').val().trim()==''){
        $('#txtSchoolName').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }
    else if($('#txtSchoolStart').val().trim()==''){
        $('#txtSchoolStart').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }
    else if($('#txtSchoolEnd').val().trim()==''){
        $('#txtSchoolEnd').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }
    else if($('#txtMaxGrade').val().trim()==''){
        $('#txtMaxGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html("<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>");
    }else{
     $.ajax({
           beforeSend: function(){
               $('#spinner').attr('class','loader');
           },
            url:"core/controller/updateAcademicDataController.php",
            type:"POST",
            data:{flg:flag},
            success: function(msg){
                alert(msg);
            },
            error: function(jqXHR,status,error){

            },
            complete: function(jqXHR){
                $('#spinner').attr('class','');
            }
        });
    }
});
//////////////////////////////

$(document).on('click','#professionalInformation',function(){
   $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "getProfessionalInformationController.php",
       type:"POST",
       data:{},
       success: function(){

       },
       error: function(){

       },
       complete: function(){
           $('#spinner').attr('class','');
       }
   });
});
/*$(document).on('click','#courses' ,function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/updateResumeCoursesController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
           if(msg==1){
               alert("AcCursos");
           }
       },
       error: function(jqXHR,status,error){
           alert(jqXHR.responseXML+status+error);
       },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
   });
});*/
