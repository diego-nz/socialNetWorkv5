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
            //alert(jqXHR+status+error);
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
            alertify.alert("Se ha postulado correctamente a la vacante");
        },
        error: function (jqXHR,status,error){
            //alert(jqXHR+status+error);
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
//Fechas Info. Escolar
$(document).on('focus','#txtSchoolStart',function(){
     $('#txtSchoolStart').datepicker({
        dateFormat: "yy/mm/dd",
        // minDate:0,
         //changeYear:"false",
        //yearRange:"2016: ",
        changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        //gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
     });
});
//Fechas Info. Escolar
$(document).on('focus','#txtSchoolEnd',function(){
     $('#txtSchoolEnd').datepicker({
        dateFormat: "yy/mm/dd",
        // minDate:0,
         //changeYear:"false",
        //yearRange:"2016: ",
        changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        //gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
     });
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
            $('#displayAcademic').append("<hr><button class='btn-xs btn-success' id='addAcademicBtn' data-toggle='modal' data-target='#modalUpdate'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
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
            //console.error(jqXHR.responseXML+error.responseText+status.response);
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
                alertify.alert("¡Operación exitosa! Sus datos han sido actualizados correctamente.");
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
            alertify.alert("¡Operación exitosa! Sus datos han sido eliminados  correctamente.");
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
           $('#displayProfessional').append("<hr><button class='btn-xs btn-success' id='addProfInfoBtn' data-toggle='modal' data-target='#modalUpdate'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
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
                alertify.alert("¡Operación exitosa! Sus datos han sido eliminados  correctamente.");
                $('#professionalInformation').trigger('click');
            }
        },
        error: function(jqXHR,error,status){
            //console.error(jqXHR.responseXML+error.responseText+status.response);
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
            $('#displayCourses').append("<hr><button class='btn-xs btn-success' id='addCourseBtn' data-toggle='modal' data-target='#modalUpdate'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
       },
       error: function(jqXHR,status,error){
           //console.error(jqXHR.responseXML+status+error);
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
            //console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });
});

//Fechas Info. Escolar
$(document).on('focus','#txtCourseStart',function(){
     $('#txtCourseStart').datepicker({
        dateFormat: "yy/mm/dd",
        // minDate:0,
         //changeYear:"false",
        //yearRange:"2016: ",
        changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        //gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
     });
});
//Fechas Info. Escolar
$(document).on('focus','#txtCourseEnd',function(){
     $('#txtCourseEnd').datepicker({
        dateFormat: "yy/mm/dd",
        // minDate:0,
         //changeYear:"false",
        //yearRange:"2016: ",
        changeMonth: "true",
        dayNames: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado" ],
        dayNamesMin: [ "Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa" ],
        firstDay: 1,
        //gotoCurrent: true,
        monthNames: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]
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
                    alertify.alert("¡Operación exitosa! Sus datos han sido actualizados correctamente.");
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
                alertify.alert("¡Operación exitosa! Sus datos han sido eliminados  correctamente.");
                $('#courses').trigger('click');
            }
        },
        error: function(jqXHR,error,status){
           // console.error(jqXHR.responseXML+error.responseText+status.response);
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
            $('#displayWork').append("<hr><button class='btn-xs btn-success' id='addWorkBtn' data-toggle='modal' data-target='#modalUpdate'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");

       },
       error: function(jqXHR,status,error){
          // console.error(jqXHR.responseXML+status+error);
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
            //console.error(jqXHR.responseXML+error.responseText+status.response);
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
                    alertify.alert("¡Operación exitosa! </strong> <a href='#' class='alert-link'>Sus datos han sido actualizados correctamente.");
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
               alertify.alert("¡Operación exitosa!Sus datos han sido eliminados  correctamente.");
                $('#workingExperience').trigger('click');
            }
        },
        error: function(jqXHR,error,status){
            //console.error(jqXHR.responseXML+error.responseText+status.response);
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
            $('#displayLanguage').append("<hr><button class='btn-xs btn-success' id='addLanguageBtn' data-toggle='modal' data-target='#modalUpdate'>Nuevo <i class='fa fa-plus fa-fw'></i></button>");
       },
       error: function(jqXHR,status,error){
           //console.error(jqXHR.responseXML+status+error);
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
           // console.error(jqXHR.responseXML+error.responseText+status.response);
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
                    alertify.alert("¡Operación exitosa! Sus datos han sido actualizados correctamente.");
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
                alertify.alert("¡Operación exitosa! Sus datos han sido eliminados  correctamente.");
                $('#languages').trigger('click');
            }
        },
        error: function(jqXHR,error,status){
            //console.error(jqXHR.responseXML+error.responseText+status.response);
        },
        complete: function(){
            $('#spinner').attr('class','');
        }
    });

});

$(document).on('click','#addAcademicBtn',function(){
    var flag="true" ;
    var form="<div class='form-group'>"
                        +"<label for='radIsStudying' class='control-label'>¿Estudia actualmente?</label>"
                        +"<label for='radIsStudying' class='radio-inline'>"
                            +"<input type='radio' class='form-control' id='radIsStudyingY' value='Si' name='radIsStudying'/>Si"
                        +"</label>"
                        +"<label for='radIsStudying' class='radio-inline'>"
                            +"<input type='radio' class='form-control' id='radIsStudyingN' value='No' name='radIsStudying' checked/>No"
                        +"</label>"
                    +"</div>"

                    +"<div class='form-group'>"
                        +"<label for='txtActualGrade' class='control-label'>Grado actual que cursa: </label>"
                        +"<input type='text' class='form-control' id='txtActualGrade' placeholder='Si no estudia especifique'/>"
                    +"</div>"
                    +"<div class='form-group'>"
                        +"<label for='txtSchoolName' class='control-label'>Escuela: </label>"
                        +"<input type='text' class='form-control' id='txtSchoolName' placeholder='Nombre de la escuela'/>"
                    +"</div>"
                    +"<div class='form-group'>"
                        +"<label for='txtSchoolStart' class='control-label'>Inicio de estudios: </label>"
                        +"<input type='text' class='form-control' id='txtSchoolStart' placeholder=''/>"
                    +"</div>"
                    +"<div class='form-group'>"
                        +"<label for='txtSchoolEnd' class='control-label'>Término de estudios: </label>"
                        +"<input type='text' class='form-control' id='txtSchoolEnd' placeholder=''/>"
                    +"</div>"
                    +"<div class='form-group'>"
                        +"<label for='txtMaxGrade' class='control-label'>Grado máximo de estudios: </label>"
                        +"<input type='text' class='form-control' id='txtMaxGrade' placeholder='Maestria/Licenciatura/Bachillerato'/>"
                    +"</div>";

    $('#myModalTitle').text("Información académica");
    $('#modalBodyUpdate').html(form);
    $('#footerUpdate').html("<button type='submit' class='btn btn-success' id='saveNewAcademic'>Agregar</button>");

});

$(document).on('click','#saveNewAcademic',function(){
    var flag="true" ;
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
               beforeSend:function(){
                   $('#spinner').attr('class','loader');
               },
                url: "core/controller/addAcademicDataController.php",
                type: "POST",
                data:{flg:flag,isStudying:studying,grade:actualGrade,
                  schoolName:school,begin:schoolStart,end:schoolFinish,lastYear:lastGrade},
                success:function(msg){
                    if(msg==1){
                        $('#closeModalUpdate').trigger('click');
                        alertify.alert("¡Operación exitosa! Sus datos han sido agregados correctamente.");
                        $('#schoolingInformation').trigger('click');
                    }
                },
                error:function(){

                },
                complete: function(){
                      $('#spinner').attr('class','');
                }
            });
    }
});

$(document).on('click','#addProfInfoBtn',function(){
    var form="<div class='form-group'>"
                    +"<div class='form-group'>"
                        +"<label for='cmbDegree' class='control-label'>Titulado en: </label>"
                        +"<select class='form-control' id='cmbDegree'>"
                                +"<option value='0'>Selecciona alguna una opción carrera en:</option>"
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
                    +"<div class='form-group'>"
                        +"<label for='txtProfCed' class='control-label'>Cédula profesional: </label>"
                        +"<input type='text' class='form-control' id='txtProfCed' placeholder='Sí,número/no,expecifique' maxlength='18'/>"
                    +"</div>";
    $('#myModalTitle').text("Información profesional");
    $('#modalBodyUpdate').html(form);
    $('#footerUpdate').html("<button type='submit' class='btn btn-success' id='newProf'>Agregar</button>");
   });

$(document).on('click','#newProf',function(){
    var flag="true";
    var degree=$('#cmbDegree').val();
    var cedule=$('#txtProfCed').val();
    var htmlErrorMessage="<div class='alert alert-dismissible alert-danger'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Hubo un error! Falta información.</strong> <a href='#' class='alert-link'>Completa este campo por favor.</a></div>";

    if(degree==0){
        $('#cmbDegree').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }else if($('#txtProfCed').val().trim()===''){
        $('#txtProfCed').focus().css('border-color','#cd0808');
        $('#modalMessage').html(htmlErrorMessage);
    }else{

       $.ajax({
          beforeSend:function(){
              $('#spinner').attr('class','loader');
          },
           url:"core/controller/addProfessionalInformationController.php",
           type:"POST",
           data: {flg:flag,newDegree:degree,newCedule:cedule},
           success: function(msg){
                if(msg==1){
                    $('#closeModalUpdate').trigger('click');
                    alertify.alert("¡Operación exitosa! Sus datos han sido agregados correctamente.")
                    $('#professionalInformation').trigger('click');
                }
            },
           error: function(){

           },
           complete: function(){
               $('#spinner').attr('class','');
           }

       });

    }

});

$(document).on('click','#showVacancies',function(){
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
            //alert(jqXHR+status+error);
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

$(document).on('click','#MyApplications',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url:"core/controller/getApplicationsController.php",
       type:"POST",
       data:{flg:flag},
       success: function(msg){
           if(msg==1){
               alertify.alert("Aún no te has postulado a alguna vacante. No esperes más, hay nuevos empleos cada día.");
                 $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡No te has potulado a una vacante aún!</strong> <a href='#' class='alert-link'>Pero no te precupes hay nuevos empleos cada día.</a></div>");
           }else{
               $('#middleTitle').text("Tus postulaciones.");
               $('#middlePanel').html(msg);
           }
       },
       error: function(){

       },
       complete: function(){
           $('#spinner').attr('class','');
       }
   });
});

$(document).on('click','#personMessage',function(){
   var flag="true";
    $.ajax({
      beforeSend: function(){
          $('#spinner').attr('class','loader');
      },
       url:"core/controller/getPersonMessageController.php",
       type:"POST",
       data:{flg:flag},
       success: function(msg){
           if(msg==1){
            alertify.alert("Sin mensajes");
            $('#stateMessage').html("<div class='alert alert-dismissible alert-info'><button type='button' class='close' data-dismiss='alert'>&times;</button><strong>¡Sin mensajes!</strong> <a href='#' class='alert-link'>Tu buzón de entrada esta vacío.</a></div>");
           }else{
               $('#middleTitle').text("Buzón");
               $('#middlePanel').html(msg);
           }

       },
       error: function(){

       },
       complete: function(){
           $('#spinner').attr('class','');
       }
   });
});
