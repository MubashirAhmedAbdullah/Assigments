import { auth, createUserWithEmailAndPassword} from "../utilis/utilis.js";





const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});


const signup_btn = document.getElementById('signup_btn');
const signin_btn = document.getElementById('signin_btn');


signup_btn.addEventListener('click', ()=>{

})
