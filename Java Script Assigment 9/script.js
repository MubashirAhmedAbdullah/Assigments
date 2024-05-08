var displaybox = document.getElementById("displaypanel");
var button = document.querySelectorAll("button");

var string = "" ;

button.forEach(element => {
  element.addEventListener('click' , (b)=> {
    if(b.target.innerText == '='){
      string = (eval(string))
      displaybox.value = string;
    }
    else if (b.target.innerText == 'AC'){
      string = ""
      displaybox.value = string;
    }
    else if (b.target.innerText == "DEL"){
      string = string.substring(0,string.length-11)
      displaybox.value = string; 
    }
    else if (b.target.id == "plusminuse"){
      string = String(-eval(string))
      displaybox.value = string;
    }
    else{
      string +=b.target.innerText
      displaybox.value = string
    }
  })
})