import { auth,onAuthStateChanged, signOut } from "./utilis/utilis.js";

console.log(auth,signOut);

const login_link = document.getElementById('login_link');
const logout_btn = document.getElementById('logout-btn');
const logout = document.getElementById('logout');
const profile = document.getElementById('profile');



logout_btn.addEventListener('click', ()=>{
    signOut(auth).then(()=>{
        window.location.href = '/'
    })
})
onAuthStateChanged(auth, (user)=>{
    if(user){
        login_link.style.display = 'none'
        logout_btn.style.display = 'block'
        logout.style.display = 'block'
        profile.style.display = 'block'
    }else{
        login_link.style.display = 'block'
        logout_btn.style.display = 'none'
        logout.style.display = 'none'
        profile.style.display = 'none'
    }
})
