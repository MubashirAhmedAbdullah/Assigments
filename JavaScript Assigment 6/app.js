

var years = document.getElementById(years);
var months = document.getElementById(month);
var weeks = document.getElementById(week);
var days = document.getElementById(days);
var hours = document.getElementById(hours);
var minutes = document.getElementById(minutes);
var seconds = document.getElementById(seconds);


var now = new Date();
var currenttime = now.getTime();


var eidtime = new Date();
eidtime = eidtime.setMonth(5);
var check = eidtime - currenttime
console.log(check);
console.log(Math.round(check / 1000 / 60 / 60 / 24 / 30));
