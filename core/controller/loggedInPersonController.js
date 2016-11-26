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
                $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡No se han encontrado vacantes!</strong> <a href='#' class='alert-link'>Pero no te precupes seguiremos buscando la mejor opción para ti</a></div>");
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
                                        +"<div id='displayAcademic' class='displayDiv'></div>"
                                        +"<a href='#' id='professionalInformation' class='list-group-item' role='button'>Información Profesionales</a>"
                                        +"<div id='displayProfessional' class='displayDiv'></div>"
                                        +"<a href='#' id='courses' class='list-group-item'>Cursos</a>"
                                        +"<div id='displayCourses' class='displayDiv'></div>"
                                        +"<a href='#' id='workingExperience' class='list-group-item'>Experiencia Laboral</a>"
                                        +"<div id='displayWork' class='displayDiv'></div>"
                                        +"<a href='#' id='languages' class='list-group-item'>Idiomas</a>"
                                        +"<div id='displayLanguage' class='displayDiv'></div>"
                                +"</div>");
   });

$(document).on('click','#schoolingInformation',function(){
    var flag="true";

    $.ajax({
        beforeSend:function(){
            $('#spinner').attr('class','loader');
            $('#modalMessage').html("");
        },
        url: "core/controller/getAcademicDataController.php",
        type: "POST",
        data: {flg:flag},
        success: function(msg){
            $('.displayDiv').hide();
            $('#displayAcademic').show();
            $('#displayAcademic').html(msg);
            $('#displayAcademic').append("<hr><button class='btn-xs btn-success' id='addAcademicBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
        },
        error: function(jqXHR,error,status){

        },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
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
            $('#myModalTitle').text("Información Académica");
            $('#modalBodyUpdate').html(msg);
            var studying=$('#txtIsStudying').val();
            if(studying=="Si" || studying=="si"){
                $('#radIsStudyingY').attr('checked',true);

            }else if(studying=="No" || studying=="no"){
                $('#radIsStudyingN').attr('checked',true);
            }
            $('#saveAcademic').show();
        },
        error: function(jqXHR,error,status){
            console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });

});


$(document).on('click','#saveChangesAcademicBtn',function(){

    var flag="true";
    var key=$('#txtAcadDat').val();
    var studying=$('input:radio[name=radIsStudying]:checked').val();
    var actualGrade=$('#txtActualGrade').val();
    var school=$('#txtSchoolName').val();
    var schoolStart=$('#txtSchoolStart').val();
    var schoolFinish=$('#txtSchoolEnd').val();
    var lastGrade=$('#txtMaxGrade').val();
    var htmlErrorMessage="<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>";

    $('#modalMessage').html("");
    $('#txtActualGrade').focus().css('border-color','');
    $('#txtSchoolName').css('border-color','');
    $('#txtSchoolStart').css('border-color','');
    $('#txtSchoolEnd').css('border-color','');
    $('#txtMaxGrade').css('border-color','');

    if($('#txtActualGrade').val().trim()==''){
        $('#txtActualGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtSchoolName').val().trim()==''){
        $('#txtSchoolName').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtSchoolStart').val().trim()==''){
        $('#txtSchoolStart').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtSchoolEnd').val().trim()==''){
        $('#txtSchoolEnd').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtMaxGrade').val().trim()==''){
        $('#txtMaxGrade').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }else{
     $.ajax({
           beforeSend: function(){
               $('#spinner').attr('class','loader');
           },
            url:"core/controller/updateAcademicDataController.php",
            type:"POST",
            data:{flg:flag,academicKey:key,isStudying:studying,grade:actualGrade,
                  schoolName:school,begin:schoolStart,end:schoolFinish,lastYear:lastGrade},
            success: function(msg){
                if(msg==1){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido actualizados correctamente.</a></div>");
                $('#closeModalUpdate').trigger('click');
                }
            },
            error: function(jqXHR,status,error){

            },
            complete: function(jqXHR){
                $('#spinner').attr('class','');
            }
        });
    }
});

$(document).on('click','.deleteAcademic',function(){
    var key=$(this).attr('id');
  $.ajax({
     beforeSend: function(){
         $('#spinner').attr('class','loader');
     },
      url: "core/controller/deleteAcademicDataController.php",
      type: "POST",
      data:{keyId:key},
      success: function(msg){
          if(msg==1){
            $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido eliminados  correctamente.</a></div>");
            $('#schoolingInformation').trigger('click');
          }
      },
      error:function(){

      },
      complete: function(){
          $('#spinner').attr('class','');
      }
  });
});
//////////////////////////////
$(document).on('click','#professionalInformation',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getProfessionalInformationController.php",
       type:"POST",
       data:{flg:flag},
       success: function(msg){
           $('.displayDiv').hide();
           $('#displayProfessional').show();
           $('#displayProfessional').html(msg);
           $('#displayProfessional').append("<hr><button class='btn-xs btn-success' id='addProfInfoBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
       },
       error: function(jqXHR,status,error){

       },
       complete: function(){
           $('#spinner').attr('class','');

       }
   });
});

$(document).on('click','.deleteProfessional',function(){
    var key=$(this).attr('id');
    var flag="false";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/deleteProfessionalInformationController.php",
        type: "POST",
        data: {flg:flag,keyId:key},
        success: function(msg){
            if(msg==1){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido eliminados  correctamente.</a></div>");
                $('#professionalInformation').trigger('click');
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
////Cursos///
$(document).on('click','#courses' ,function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getCoursesController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
            $('.displayDiv').hide();
            $('#displayCourses').show();
            $('#displayCourses').html(msg);
            $('#displayCourses').append("<hr><button class='btn-xs btn-success' id='addCourseBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
       },
       error: function(jqXHR,status,error){
           console.error(jqXHR.responseXML+status+error);
       },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
   });
});

$(document).on('click','.updateCourse',function(){
    var key=$(this).attr('id');
    var flag="false";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateCourseController.php",
        type: "POST",
        data: {flgF:flag,keyId:key},
        success: function(msg){
            $('#myModalTitle').text("Curso");
            $('#modalBodyUpdate').html(msg);
            $('#saveCourse').show();
        },
        error: function(jqXHR,error,status){
            console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });
});

$(document).on('click','#saveChangesCourseBtn',function(){
    var flag="true";
    var courseKey=$('#txtCourse').val();
    var courseName=$('#txtCourseName').val();
    var area=$('#txtArea').val();
    var courseStart=$('#txtCourseStart').val();
    var courseEnd=$('#txtCourseEnd').val();
    var certified=$('#txtCertified').val();
    var htmlErrorMessage="<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>";

    $('#txtCourse').focus().css('border-color','');
    $('#txtCourseName').css('border-color','');
    $('#txtArea').css('border-color','');
    $('#txtCourseStart').css('border-color','');
    $('#txtCourseEnd').css('border-color','');
    $('#txtCertified').css('border-color','');

    if($('#txtCourseName').val().trim()==''){
        $('#txtCourseName').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtArea').val().trim()==''){
        $('#txtArea').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtCourseStart').val().trim()==''){
        $('#txtCourseStart').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtCourseEnd').val().trim()==''){
        $('#txtCourseEnd').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }else if($('#txtCertified').val().trim()==''){
        $('#txtCertified').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }else{
        $.ajax({
            beforeSend: function(){
                $('#spinner').attr('class','loader');
            },
            url: "core/controller/updateCourseController.php",
            type: "POST",
            data: {flg:flag,key:courseKey,course:courseName,courseArea:area,start:courseStart,end:courseEnd,courseCertified:certified},
            success: function(msg){
                if(msg==1){
                    $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido actualizados correctamente.</a></div>");
                    $('#closeModalUpdate').trigger('click');
                }
            },
            error: function(jqXHR,status,error){
                console.error(error.responseText);
            },
            complete: function(){
                $('#spinner').attr('class','');
            }
        });
    }
});

$(document).on('click','.deleteCourse',function(){
    var key=$(this).attr('id');
    var flag="true";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/deleteCourseController.php",
        type: "POST",
        data: {flg:flag,keyId:key},
        success: function(msg){
            if(msg==1){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido eliminados  correctamente.</a></div>");
                $('#courses').trigger('click');
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
/////Experiencia Laboral/////
$(document).on('click','#workingExperience' ,function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getWorkingExperienceController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
            $('.displayDiv').hide();
            $('#displayWork').show();
            $('#displayWork').html(msg);
            $('#displayWork').append("<hr><button class='btn-xs btn-success' id='addWorkBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");

       },
       error: function(jqXHR,status,error){
           console.error(jqXHR.responseXML+status+error);
       },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
   });
});

$(document).on('click','.updateWork',function(){
    var key=$(this).attr('id');
    var flag="false";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateWorkingExperienceController.php",
        type: "POST",
        data: {flgF:flag,keyId:key},
        success: function(msg){
            $('#myModalTitle').text("Experiencia laboral");
            $('#modalBodyUpdate').html(msg);
            var workingTxt=$('#txtIsWorking').val();
            if(workingTxt=="Si" || workingTxt=="si"){
                $('#radIsWorkingY').attr('checked',true);

            }else if(workingTxt=="No" || workingTxt=="no"){
                $('#radIsWorkingN').attr('checked',true);
            }
            $('#saveWork').show();
        },
        error: function(jqXHR,error,status){
            console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });
});

$(document).on('click','#saveChangesWorkingBtn',function(){
    var flag="true";
    var workKey=$('#txtWork').val();
    var radWork=$('input:radio[name=radIsWorking]:checked').val();
    var work=$('#txtLastWork').val();
    var description=$('#txtDescription').val();
    var time=$('#txtTime').val();
    var htmlErrorMessage="<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>";

    $('#txtLastWork').focus().css('border-color','');
    $('#txtDescription').css('border-color','');
    $('#txtTime').css('border-color','');

    if($('#txtLastWork').val().trim()==''){
        $('#txtLastWork').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtDescription').val().trim()==''){
        $('#txtDescription').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtTime').val().trim()==''){
        $('#txtTime').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else{
        $.ajax({
            beforeSend: function(){
                $('#spinner').attr('class','loader');
            },
            url: "core/controller/updateWorkingExperienceController.php",
            type: "POST",
            data: {flg:flag,key:workKey,isWorkingNow:radWork,lastWork:work,desc:description,timeWorking:time},
            success: function(msg){
                if(msg==1){
                    $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido actualizados correctamente.</a></div>");
                    $('#closeModalUpdate').trigger('click');
                }
            },
            error: function(jqXHR,status,error){
                console.error(error.responseText);
            },
            complete: function(){
                $('#spinner').attr('class','');
            }
        });
    }
});

$(document).on('click','.deleteWork',function(){
    var key=$(this).attr('id');
    var flag="true";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/deleteWorkingExperienceController.php",
        type: "POST",
        data: {flg:flag,keyId:key},
        success: function(msg){
            if(msg==1){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido eliminados  correctamente.</a></div>");
                $('#workingExperience').trigger('click');
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
/////Idioma/////
$(document).on('click','#languages',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url: "core/controller/getLanguageController.php",
       type: "POST",
       data: {flg:flag},
       success: function(msg){
            $('.displayDiv').hide();
            $('#displayLanguage').show();
            $('#displayLanguage').html(msg);
            $('#displayLanguage').append("<hr><button class='btn-xs btn-success' id='addLanguageBtn'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
       },
       error: function(jqXHR,status,error){
           console.error(jqXHR.responseXML+status+error);
       },
        complete: function(jqXHR){
            $('#spinner').attr('class','');
        }
   });
});

$(document).on('click','.updateLanguage',function(){
    var key=$(this).attr('id');
    var flag="false";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/updateLanguageController.php",
        type: "POST",
        data: {flgF:flag,keyId:key},
        success: function(msg){
            $('#myModalTitle').text("Idioma");
            $('#modalBodyUpdate').html(msg);
            var workingTxt=$('#txtIsWorking').val();
            $('#saveLanguage').show();
        },
        error: function(jqXHR,error,status){
            console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });
});

$(document).on('click','#saveChangesLanguageBtn',function(){
    var flag="true";
    var languageKey=$('#txtLanguage').val();
    var languageName=$('#txtLanguageName').val();
    var languageLevel=$('#txtLanguageLevel').val();
    var languageCertified=$('#txtLanguageCertified').val();
    var htmlErrorMessage="<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>";

    $('#txtLanguageName').focus().css('border-color','');
    $('#txtLanguageLevel').css('border-color','');
    $('#txtLanguageCertified').css('border-color','');

    if($('#txtLanguage').val().trim()==''){
        $('#txtLanguage').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtLanguageLevel').val().trim()==''){
        $('#txtLanguageLevel').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else if($('#txtLanguageCertified').val().trim()==''){
        $('#txtLanguageCertified').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }
    else{
        $.ajax({
            beforeSend: function(){
                $('#spinner').attr('class','loader');
            },
            url: "core/controller/updateLanguageController.php",
            type: "POST",
            data: {flg:flag,key:languageKey,language:languageName,level:languageLevel,certified:languageCertified},
            success: function(msg){
                if(msg==1){
                    $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido actualizados correctamente.</a></div>");
                    $('#closeModalUpdate').trigger('click');
                }
            },
            error: function(jqXHR,status,error){
                console.error(error.responseText);
            },
            complete: function(){
                $('#spinner').attr('class','');
            }
        });
    }
});

$(document).on('click','.deleteLanguage',function(){
    var key=$(this).attr('id');
    var flag="true";

    $.ajax({
       beforeSend: function(){
           $('#spinner').attr('class','loader');
       },
        url: "core/controller/deleteLanguageController.php",
        type: "POST",
        data: {flg:flag,keyId:key},
        success: function(msg){
            if(msg==1){
                $('#stateMessage').html("<div class='alert alert-dismissible alert-success'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido eliminados  correctamente.</a></div>");
                $('#languages').trigger('click');
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
