// impoert the fire base start here
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAHxGEWW6z5R2Gtt4O4Zog6L4Fulxcd3Gw",
    authDomain: "hashir-mart.firebaseapp.com",
    projectId: "hashir-mart",
    storageBucket: "hashir-mart.appspot.com",
    messagingSenderId: "697309900595",
    appId: "1:697309900595:web:dc4b09e80993e7984c1846",
    measurementId: "G-X6J2M0GTXT"
};

const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
console.log(analytics);
const auth = getAuth(app);
console.log(auth);


const login_andsignup_form_container = document.getElementById('login-and-signup-form-container');
const hashir_mart_container = document.getElementById('hashir-mart-container');
const user_name = document.getElementById('user-name');



onAuthStateChanged(auth, (user) => {
    if (user) {
        login_andsignup_form_container.style.display = 'none';
        hashir_mart_container.style.display = 'block';
        console.log("You Are Sucessfully Logged In");
        user_name.innerText = login_email.value;
        const uid = user.uid;
        // ...
    } else {
        console.log("User is signed out");
        login_andsignup_form_container.style.display = 'block';
        hashir_mart_container.style.display = 'none';
    }
});


const signup_email = document.getElementById('signup_email');
const signup_password = document.getElementById('signup_password');
const signup_btn = document.getElementById('signup_btn');

const login_email = document.getElementById('login_email');
const login_password = document.getElementById('login_password');
const login_btn = document.getElementById('login_btn');
const logout_btn = document.getElementById('logout_btn') 

//   for sign up js

signup_btn.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
            // ..
        });
})

// for sign in js


login_btn.addEventListener('click', () => {
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert(errorMessage);
        });
})


// login and signup form js start here


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});


// logout user js

logout_btn.addEventListener('click', () =>{
    
    signOut(auth).then(() => {
        console.log("You Are Sucessfully logged out");
      }).catch((error) => {
        console.log(error.message);
      });
})





// Hashir mart js star here


document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('filter');
    const sort = document.getElementById('sort');
    const products = document.querySelectorAll('.product');

    filter.addEventListener('change', filterProducts);
    sort.addEventListener('change', sortProducts);

    function filterProducts() {
        const value = filter.value;
        products.forEach(product => {
            const price = parseInt(product.getAttribute('data-price'));
            if (value === 'all' ||
                (value === '0-50' && price <= 50) ||
                (value === '50-100' && price > 50 && price <= 100) ||
                (value === '100-150' && price > 100 && price <= 150)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function sortProducts() {
        const value = sort.value;
        const productArray = Array.from(products);
        productArray.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));
            return value === 'low-high' ? priceA - priceB : priceB - priceA;
        });
        const productContainer = document.querySelector('.products');
        productArray.forEach(product => productContainer.appendChild(product));
    }
});
