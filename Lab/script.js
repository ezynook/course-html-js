$(function() {
    // แสดงข้อมูลมาแสดงจาก API 
    $.post('https://iwtc.pasitdev.com/api/', {type: 'job'}, (response) => {
        console.log(response)
    });
    // Login Test 
    var loginParams = {
        type: 'login', 
        username: 'nook', 
        password: '2909'
    }
    $.post('https://iwtc.pasitdev.com/api/', loginParams, (response) => {
        console.log(response)
    });








    
    //-----------------Get Data------------------
    var getParams = {
        type: 'get'
    }
    $.post("https://iwtc.pasitdev.com/api/test", getParams, (response) => {
        console.log(response);
    });
    //-----------------Add Data------------------
    var addParams = {
        type: 'add', 
        car: 'Tesla'
    }
    $.post("https://iwtc.pasitdev.com/api/test", addParams, (response) => {
        console.log(response);
    });
    //-----------------Edit Data------------------
    var editParams = {
        type: 'edit', 
        car: 'Tesla',
        id: '1'
    }
    $.post("https://iwtc.pasitdev.com/api/test", editParams, (response) => {
        console.log(response);
    });
    //-----------------Delete Data------------------
    var deleteParams = {
        type: 'delete', 
        id: '1'
    }
    $.post("https://iwtc.pasitdev.com/api/test", deleteParams, (response) => {
        console.log(response);
    });
});