import {
    app,
    auth,
    db,
    doc,
    getDoc,
    getDocs,
    onAuthStateChanged,
    signOut,
    collection
} from "./utilis/utilis.js";


document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile');
    const profileSection = document.querySelector('.profile-section');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const carouselDots = document.querySelector('.carousel-dots');

    // Toggle profile section visibility
    profileIcon.addEventListener('click', () => {
        profileSection.style.display = profileSection.style.display === 'flex' ? 'none' : 'flex';
    });

    // Toggle navbar on mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Initialize carousel
    let currentSlide = 0;

    function updateCarousel() {
        carouselSlides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Create carousel dots
    carouselSlides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
        carouselDots.appendChild(dot);
    });

    updateCarousel();
    setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselSlides.length;
        updateCarousel();
    }, 5000);
});


//firebase started 


console.log(auth);
console.log(app);

// const profile = document.getElementById('profile')
// const login_link = document.getElementById('login_link')
// const your_products = document.getElementById('your_products');
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         const uid = user.uid
//         profile.style.display = "inline-block"
//         login_link.style.display = "none"
//         your_products.style.display = 'inline-block'

//     } else {
//         profile.style.display = "none"
//         login_link.style.display = "inline-block"
//         your_products.style.display = 'none'
//     }
// })


// const logout_btn = document.getElementById('logout_btn');

// logout_btn.addEventListener('click', ()=>{
//     signOut(auth)
//     .then(()=>{
//         window.location.href ='./index.html'
//     }).catch(()=>{
//         alert('We are facing an error')
//     })
// })



// Select HTML elements by their IDs
const profile = document.getElementById('profile');
const login_link = document.getElementById('login_link');
const your_products = document.getElementById('your_products');
const profile_images = document.getElementById('profile_images');

// Listen for authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // If the user is signed in
        const uid = user.uid;
        profile.style.display = "inline-block"; // Show profile
        login_link.style.display = "none"; // Hide login link
        your_products.style.display = 'inline-block'; // Show user's products

        getUserInfo(uid);
    } else {
        // If the user is not signed in
        profile.style.display = "none"; // Hide profile
        login_link.style.display = "inline-block"; // Show login link
        your_products.style.display = 'none'; // Hide user's products
    }
});

// Select the logout button by its ID
const logout_btn = document.getElementById('logout_btn');

// Add an event listener to the logout button
logout_btn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location.href = './index.html'; // Redirect to the index page on successful sign out
        }).catch(() => {
            alert('We are facing an error'); // Show an alert on sign out error
        });
});



function getUserInfo(uid) {
    const userRef = doc(db, "users", uid);
    getDoc(userRef)
        .then((data) => {
            console.log(data.data());
            console.log(data.id);
            profile_images.src = data.data()?.profileImage;
            const userNAme = document.getElementById('userNAme').innerHTML = data.data()?.name;
        })
}




const product_conatiner = document.getElementById('product_conatiner');

async function getAllProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log(querySnapshot);
        product_conatiner.innerHTML = ''

        querySnapshot.forEach((doc) => {
            const docID = doc.id;
            const docData = doc.data();

            console.log(docID);
            console.log(docData);


            const allProducts = docData;

            console.log(allProducts);

            const { product_price, product_name, product_image, product_description, product_category } = allProducts


            const product_cards = `<div class="feature-item">
            <img src="${product_image}" alt="Feature One">
            <h2>${product_name}</h2>
            <p>${product_category}</p>
            <p>${product_description}</p>
            <p>Price $ <span>${product_price}</span></p>`


            product_conatiner.innerHTML += product_cards;

            console.log(allProducts);
        })

    } catch (err) {
        console.log("error");
        alert(err)
    }
}


getAllProducts();


