var hours = document.getElementById("hours")
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
var am_pm = document.getElementById("am_pm")


setInterval(function(){
    var currentDate = new Date();
    var currentHour = currentDate.getHours();


    hours.innerText = currentDate.getHours();
    minutes.innerText = currentDate.getMinutes();
    seconds.innerText = currentDate.getSeconds();

    if(hours.innerText <= 9){
        hours.innerText = "0" + currentDate.getHours();
    }
    
    if(minutes.innerText <= 9){
        minutes.innerText = "0" + currentDate.getMinutes();
    }

    if(seconds.innerText <= 9){
        seconds.innerText = "0" + currentDate.getSeconds();
    }
}, 1000);


if (hours.innerText <= 12){
    am_pm.innerText = "am"
}
else{
    am_pm.innerText = "pm";
}


var date = new Date();
var currentDate = document.getElementById("todaydate");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
var monthsname = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JULY", "AUG", "SEP", "OCT", "NOV","DEC"];
var daysname = ["MONDAY", "TUESDAY", "WEDNESDAY" , "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

currentDate.innerText ="TODAY DATE IS : " + date.getDate() + " - " + date.getMonth() + " - " + date.getFullYear();
day.innerText = "TODAY IS : " + daysname[date.getDay()];
month.innerText = "CURRENT MONTH : " + monthsname[date.getMonth()];
year.innerText = "CURRENT YEAR IS : " + date.getFullYear();