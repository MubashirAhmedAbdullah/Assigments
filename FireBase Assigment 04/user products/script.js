import {
    auth,
    db,
    signOut,
    getDoc,
    doc,
    onAuthStateChanged,
    getDocs,
    collection,
    query,
    where,
    deleteDoc,
    app,
    analytics,
} from "../utilis/utilis.js";



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




//firebase start here


const your_products = document.getElementById('your_products');
const profile = document.getElementById('profile');
const login_link = document.getElementById('login_link');
const create_products = document.getElementById('create_products');
const logout_btn = document.getElementById('logout_btn');
const profile_images = document.getElementById('profile_images');

console.log(auth);
const user = auth.currentUser;
console.log(user);
console.log(app);
console.log(analytics);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        your_products.style.display = 'none';
        create_products.style.display = 'inline-block'
        profile.style.display = 'inline-block';
        login_link.style.display = 'none';
        console.log(uid);
        getUserInfo(uid);
        myCreatedProducts(uid)

    } else {
        your_products.style.display = 'none';
        profile.style.display = 'none';
        login_link.style.display = 'inline-block';
        create_products.style.display = 'none';

    }
})


logout_btn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            console.log('user logged out');
            window.location.href = '../index.html'
        }).catch((err) => {
            const errormessage = err.message;
            alert(errormessage);
        })
})


function getUserInfo(uid) {
    const userDataRef = doc(db, "users", uid);

    getDoc(userDataRef)
        .then((data) => {
            console.log(data.data());
            console.log(data.id);
            profile_images.src = data.data()?.user_image;
        })
}


const product_container = document.getElementById('product_container');


async function myCreatedProducts(uid) {
    try {
        const q = query(collection(db, "products"), where("createdBy", "==", uid));
        const querySnapshot = await getDocs(q);
        product_container.innerHTML = "";
        if (querySnapshot.empty) {
            console.log("No products found for this user.");
            product_container.innerHTML = "<h2>No products found.</h2>";
            return;
        }
        querySnapshot.forEach((doc) => {

            const docId = doc.id;
            const docData = doc.data();

            console.log(docId);
            console.log(docData);


            const products = docData;

            console.log(products);


            const { product_price, product_name, product_image, product_description, product_category } = products


            const product_cards = `<div class="feature-item">
            <img src="${product_image}" alt="Feature One">
            <h2>${product_name}</h2>
            <p>${product_category}</p>
            <p>${product_description}</p>
            <p>Price $ <span>${product_price}</span></p>`


            product_container.innerHTML += product_cards;

            console.log(products);
        })


    } catch (err) {
        console.log("error");
        alert(err)
    }
}


