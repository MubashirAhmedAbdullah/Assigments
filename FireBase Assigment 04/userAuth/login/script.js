import { auth, signInWithEmailAndPassword } from "../../utilis/utilis.js";

console.log(auth);

const email = document.getElementById('email');
const password = document.getElementById('password');
const login_btn = document.getElementById('login_btn');



login_btn.addEventListener('click', ()=>{
signInWithEmailAndPassword(auth, email.value, password.value)
.then(()=>{
    console.log('login success');
    window.location.href = '../../index.html'
}).catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(error)
})

// console.log(email.value);
// console.log(password.value);
})