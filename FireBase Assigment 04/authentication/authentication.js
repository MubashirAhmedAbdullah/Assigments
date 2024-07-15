import { auth, collection, db, createUserWithEmailAndPassword } from "../utilis/utilis.js";

console.log(auth);
console.log(db);


// adding data to DB and then signin and signup user

const sign_up_btn = document.getElementById('sign_up-btn');
const signup_form = document.getElementById('signup_form');
// const collection = collection(db, "users")

signup_form.addEventListener('submit', (e) =>{
    e.preventDefault
    console.log(e);
    console.log(e.target);


    const img = e.target[0].files[0];
    const name = e.target[1].value;
    const LastName = e.target[2].value;
    const PhoneNumber = e.target[3].value;
    const EmailAddress = e.target[4].value;
    const Password = e.target[5].value;
    

    const userInformation = {
        img,
        name,
        LastName,
        PhoneNumber,
        EmailAddress,
        Password
    }


    //creation of accpount start here

    sign_up_btn.disabled = true
    sign_up_btn.innerText = "Craeting..."

    createUserWithEmailAndPassword(auth, EmailAddress, Password)
    .then((user) =>{
        console.log(user.user.uid);
        //upload user profile image
        
    })

})
