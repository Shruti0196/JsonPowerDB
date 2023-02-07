/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var jpdbBaseURL='http://api.login2explore.com:5577';
var jpdbIRL='/api/irl';
var jpdbIML='/api/iml';
var studentDBName='StudentDb';
var studentRelationName='studentRelation';
var connToken='90932679|-31949276357738465|90954519';

$('#rollno').focus();

function saveRecNo2LS(jsonObj){
    var Data=JSON.parse(jsonObj.data);
    localStorage.setItem('recno',Data.rec_no);
}

function getRollAsJsonObj(){
    var rollno=$('#rollno').val();
    var jsonStr={
        RollNo:rollno
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj)
{   saveRecNo2LS(jsonObj);
    var data=JSON.parse(jsonObj.data).record;
    $('#fullname').val(data.FullName);
    $('#clas').val(data.Clas);
    $('#date').val(data.Date);
    $('#address').val(data.Address);
    $('#enrollmentdate').val(data.EnrollmentDate);
}

function getRoll(){
    var rollJsonObj=getRollAsJsonObj();
    var getRequest=createGET_BY_KEYRequest(connToken,studentDBName,studentRelationName,rollJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj=executeCommandAtGivenBaseUrl(getRequest,jpdbBaseURL,jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resJsonObj.status === 400){
      $('#save').prop('disabled',false);  
      $('#reset').prop('disabled',false);
      $('#change').prop('disabled',true);
      $('#fullname').prop('disabled',false);
      $('#clas').prop('disabled',false);
      $('#date').prop('disabled',false);
      $('#enrollmentdate').prop('disabled',false);
      $('#address').prop('disabled',false);
      $('#fullname').focus();
    }
    else if(resJsonObj.status === 200){
        $('#rollno').prop('disabled',true);
        fillData(resJsonObj);
        $('#change').prop('disabled',false);
        $('#reset').prop('disabled',false);
        $('#save').prop('disabled',true);
        $('#fullname').prop('disabled',false);
        $('#clas').prop('disabled',false);
        $('#date').prop('disabled',false);
        $('#enrollmentdate').prop('disabled',false);
        $('#address').prop('disabled',false);
        $('#fullname').focus();
    }
}

function resetForm(){
    $('#rollno').val('');
    $('#fullname').val('');
    $('#clas').val('');
    $('#date').val('');
    $('#address').val('');
    $('#enrollmentdate').val('');
    $('#rollno').prop('disabled',false);
    $('#fullname').prop('disabled',true);
    $('#clas').prop('disabled',true);
    $('#date').prop('disabled',true);
    $('#enrollmentdate').prop('disabled',true);
    $('#reset').prop('disabled',true);
    $('#save').prop('disabled',true);
    $('#address').prop('disabled',true);
    $('#change').prop('disabled',true);
    $('#rollno').focus();
}

function validateData(){
    var rollno,fullname,clas,date,enrollmentdate,address;
    rollno=$('#rollno').val();
    fullname=$('#fullname').val();
    clas=$('#clas').val();
    date=$('#date').val();
    enrollmentdate=$('#enrollmentdate').val();
    address=$('#address').val();
    
    if(rollno==='')
    {
        alert('Roll No missing');
        $('#rollno').focus();
        return '';
    }
    if(fullname==='')
    {
        alert('Full Name missing');
        $('#fullname').focus();
        return '';
    }
    if(clas==='')
    {
        alert('Class missing');
        $('#clas').focus();
      
        return '';
    }
    if(date==='')
    {
        alert('Date missing');
        $('#date').focus();
        
        return '';
    }
    if(address==='')
    {
        alert('Address missing');
        $('#address').focus();
        
        return '';
    }
    if(enrollmentdate==='')
    {
        alert('Enrollment Date missing');
        $('#enrollmentdate').focus();
        
        return '';
    }
    var jsonStrObj=
    {
         RollNo:rollno,
         FullName:fullname,
         Clas:clas,
         Date:date,
         EnrollmentDate:enrollmentdate,
         Address:address
    };
    return JSON.stringify(jsonStrObj);
}

function saveData(){
    var jsonStrObj=validateData();
    if(jsonStrObj===''){
        return '';
    }
    var putRequest=createPUTRequest(connToken,jsonStrObj,studentDBName,studentRelationName);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putRequest,jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $('#rollno').focus();    
}

function changeData(){
//    $('#change').prop('disabled',true);
//    $('#reset').prop('disabled',true);
    jsonChg=validateData();
    var updateRequest=createUPDATERecordRequest(connToken,jsonChg,studentDBName,studentRelationName,localStorage.getItem('recno'));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest,jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resJsonObj);
    resetForm();
    $('#rollno').focus();    
}
