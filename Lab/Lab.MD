## การใช้งาน Ready Loaded Page

**แบบที่ 1**

```javascript
$(document).ready(function () {
    //Code
});
```
**แบบที่ 2**

```javascript
$(function() {
    //Code
});
```
## การใช้งานฟังค์ชั่น

**แบบที่ 1**
```javascript
function myFunction () {
    //Code
}
```
**แบบที่ 2**
```javascript
var myFunction = () => {
    //Code
}
```
**แบบที่ 3 (แบบรับค่าเพื่อคำนวนต่อได้)**
```javascript
function myFunction (year) {
    var calculate = year - 543;
    console.log(calculate);
}
myFunction(2567)
```
**แบบรับค่ามากกว่า 1 ค่า**
```javascript
function myFunction (fname, lname) {
    var concats = fname + ' ' + lname;
    console.log(calculate);
}
myFunction("Nook", "Pasit");
```
## แสดงข้อมูลมาแสดงจาก API 
```javascript
$.post('https://iwtc.pasitdev.com/api/', {type: 'job'}, (response) => {
    console.log(response)
});
```
## ลองทำ Login ผ่าน API
```javascript
var loginParams = {
    type: 'login', 
    username: 'nook', 
    password: '2909'
}
$.post('https://iwtc.pasitdev.com/api/', loginParams, (response) => {
    console.log(response)
});
```

---

# ส่วนของการใช้งาน API CRUD

## Get Data

```javascript
var getParams = {
    type: 'get'
}
$.post("https://iwtc.pasitdev.com/api/test", getParams, (response) => {
    console.log(response);
});
```

## Add Data

```javascript
var addParams = {
    type: 'add', 
    car: 'Tesla'
}
$.post("https://iwtc.pasitdev.com/api/test", addParams, (response) => {
    console.log(response);
});
```

## Edit Data

```javascript
var editParams = {
    type: 'edit', 
    car: 'Tesla',
    id: '1'
}
$.post("https://iwtc.pasitdev.com/api/test", editParams, (response) => {
    console.log(response);
});
```

## Delete Data

```javascript
var deleteParams = {
    type: 'delete', 
    id: '1'
}
$.post("https://iwtc.pasitdev.com/api/test", deleteParams, (response) => {
    console.log(response);
});
```

## Detect Region For set Language App

```javascript
$.get("https://ipinfo.io/json", (data) => {
    console.log(data);
    var lang = data.country
    if (lang == 'TH') {
        $("#main").text("คลิกฉัน");
    } else {
        $("#main").text("Click Me!");
    }
});
```

## ปรับใช้กับ Function ทำงานทันทีเมื่อ Page Loaded

```javascript
$(function () {

    function getRegion () {
        $.get("https://ipinfo.io/json", (data) => {
            console.log(data);
            var lang = data.country
            if (lang == 'TH') {
                $("#main").text("คลิกฉัน");
            } else {
                $("#main").text("Click Me!");
            }
        });
    }
    
    getRegion();
});
```