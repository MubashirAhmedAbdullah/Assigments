import {
    auth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    app,
    analytics
} from "../../utilis/utilis.js";

// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.getElementById('menuToggle');
//     const navLinks = document.querySelector('.nav-links');
//     const carouselSlides = document.querySelectorAll('.carousel-slide');
//     let currentSlide = 0;

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//     });

//     // Carousel functionality
//     function showNextSlide() {
//         carouselSlides[currentSlide].classList.remove('active');
//         currentSlide = (currentSlide + 1) % carouselSlides.length;
//         carouselSlides[currentSlide].classList.add('active');
//     }

//     // Initialize the first slide as active
//     carouselSlides[currentSlide].classList.add('active');

//     setInterval(showNextSlide, 5000); // Change slide every 5 seconds
// });


//firebase started

console.log(auth);
console.log(app);
console.log(analytics);






const your_products = document.getElementById('your_products');
const profile = document.getElementById('profile');

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid

    }
    else {
        your_products.style.display = 'none'
        profile.style.display = 'none'
    }
})



const email = document.getElementById('email');
const password = document.getElementById('password');
const login_btn = document.getElementById('login-btn');


login_btn.addEventListener('click', ()=>{

    console.log(email.value);
    console.log(password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)
    .then(()=>{
        window.location.href = "../../index.html"
        console.log("sign in sucessfully");
    }).catch((error)=>{
        const errorCode = error.code
        const errorMessage = error.message
        alert(errorMessage)
    })
})