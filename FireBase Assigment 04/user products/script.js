import {
    auth,
    onAuthStateChanged,
    signOut
} from "../utilis/utilis.js";

console.log(auth);

const login_link = document.getElementById('login_link');
const logout_btn = document.getElementById('logout-btn');
const logout = document.getElementById('logout');
const profile = document.getElementById('profile');
const create_product = document.getElementById('create_product');

logout_btn.addEventListener('click', ()=>{
    signOut(auth).then(() => {
        console.log('user signed out');
        }).catch((error) => {
            console.log(error.message);
            });
})

profile.addEventListener('click', ()=>{
    window.location.href = '../user Profile/index.html'
})


onAuthStateChanged(auth, (user)=>{
    if(user){
        login_link.style.display = 'none'
        // logout_btn.style.display = 'block'
        logout.style.display = 'block'
        profile.style.display = 'block'
        create_product.style.display = 'block'
        }else{
            login_link.style.display = 'block'
            logout_btn.style.display = 'none'
            logout.style.display = 'none'
            profile.style.display = 'none'
            create_product.style.display = 'none'
            }
})