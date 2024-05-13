var display = document.getElementById("number_display");
function addnumber(){
  var check = display.innerText++ ;
  if (display.innerText < 10){
    display.innerText = "0" + display.innerText ;
  }

  if(display.innerText % 2 == 0){
    // var sty = document.getElementsByTagName("body") ;
    document.body.style.background = "aqua"
    
  }
  else{
    document.body.style.background = "orange"
  }
  

}


function subtractnumber(){
  var check = display.innerText-- ;
  if (display.innerText < 10){
    display.innerText = "0" + display.innerText ;
  }

  if(display.innerText % 2 == 0){
    // var sty = document.getElementsByTagName("body") ;
    document.body.style.background = "aqua"
    
  }
  else{
    document.body.style.background = "orange"
  }
}


function resetnumber(){
  display.innerText = "00"
  document.body.style.background = "white"

}