
var minute_html = document.getElementById("minute");
var second_html = document.getElementById("second");
var millisecond_html = document.getElementById("millisecond");

var minutes = 0
var seconds = 0
var millisecond = 0

var watchinterval ;


function start(){
    watchinterval = setInterval(function(){
        millisecond++ ;

        if(millisecond >= 999){
           seconds++ ; 
           millisecond = 0 ;
        }

        
        if(seconds >= 59){
           minutes++ ; 
           seconds = 0 ;
        }
        millisecond_html.innerText = millisecond ;
        second_html.innerText = seconds ;
        if( seconds < 10){
            second_html.innerText ="0" + seconds ;
        }
        minute_html.innerText = minutes ;
        if( minutes < 10){
            minute_html.innerText ="0" + minutes ;
        }
    } , 1)
}
function stop(){
    clearInterval(watchinterval);
}
function reset(){
    clearInterval(watchinterval);
    minutes = 0
    seconds = 0
    millisecond = 0

    minute_html.innerText = 0
    second_html.innerText = 0
    millisecond_html.innerText = 0

}
