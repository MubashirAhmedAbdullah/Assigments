import {
    auth,
    app,
    analytics,
    storage,
    db,
    onAuthStateChanged,
    doc,
    getDoc,
} from "../utilis/utilis.js";


document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile');
    const profileSection = document.querySelector('.profile-section');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    // Toggle profile section visibility
    profileIcon.addEventListener('click', () => {
        profileSection.style.display = profileSection.style.display === 'flex' ? 'none' : 'flex';
    });

    // Toggle navbar on mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

});


const profile = document.getElementById('profile');
const login_link = document.getElementById('login_link');
const profile_image = document.getElementById('image');
const name = document.getElementById('name');
const middle_name = document.getElementById('middle-name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');
const address = document.getElementById('address');




onAuthStateChanged(auth, (user)=>{
    if(user){
        const uid = user.uid;
        profile.style.display = 'none'
        login_link.style.display = 'none'


        getUserInfo(uid);
    }
})



function getUserInfo(uid){
    const userRef = doc(db, "users", uid);
    getDoc(userRef)
    .then((data)=>{
        console.log(data.id);
        console.log(data.data());
        profile_image.src = data.data()?.user_image;
        name.value = data.data()?.name;
        middle_name.value = data.data()?.middle_name;
        last_name.value = data.data()?.last_name;
        email.value = data.data()?.email;
        address.value = data.data()?.address;
    })
}