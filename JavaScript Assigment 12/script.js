

// var imageupdate = document.getElementById('image');
// var btntext = document.getElementById('switch');

// btntext.addEventListener("click", function(){
//     // alert("kam kr raha hay")
// //     var click = "TURN OFF"
//     // btntext.innerText = click ;
//     // btntext.innerText = btntext.innerText ;
//     // btntext.style.backgroundColor = "red";


//     // imageupdate.src = 'assest/light-bulbs-set-27284743-removebg-preview.png';

// //     if(btntext.innerText = "TURN ON"){
// //             btntext.innerText = click ;
// //     btntext.innerText = btntext.innerText ;
// //     btntext.style.backgroundColor = "red";


// //     imageupdate.src = 'assest/light-bulbs-set-27284743-removebg-preview.png';
// //     }
// //     else{
// //             btntext.innerText = "TURN ON" ;
// //     btntext.innerText = btntext.innerText ;
// //     btntext.style.backgroundColor = "green";


// //     imageupdate.src = 'assest/light-bulbs-set-27284743-removebg-preview.png';
// //     }

// if(btntext.innerText = "TURN ON"){
//         btntext.innerText = "TURN OFF";
//         btntext.style.backgroundColor = "red"
//         imageupdate.src = 'assest/light-bulbs-set-27284743-removebg-preview.png'
// }

// if(btntext.innerText = "TURN OFF"){
//         btntext.innerText = "TURN OFF"
//         // btntext.style.backgroundColor = "green"
//         imageupdate.src = 'assest/light-bulbs-set-27284743-removebg-preview.png'
// }
// })


var bulb = document.getElementById('image');
var button = document.getElementById('switch')
var back = document.getElementById('blank');

button.addEventListener("click", function(){
    // alert("kam ho raha hay")

    if(button.innerText == "TURN ON"){
        bulb.src = './assest/light-bulbs-set-27284743-removebg-preview.png';
        button.innerText = "TURN OFF"
        button.style.backgroundColor = 'red'
        back.style.backgroundColor = '#ffedb3'
        
    }
    else{
        // alert("light on")
        bulb.src = './assest/off-removebg-preview.png';
        button.innerText = "TURN ON"
        button.style.backgroundColor = '#63f111'
        back.style.backgroundColor = 'transparent'
    }
})