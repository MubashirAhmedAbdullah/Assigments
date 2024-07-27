import {
    auth,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    db,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    onAuthStateChanged,
    app,
} from "../../utilis/utilis.js";

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


console.log(auth);
console.log(app);


const your_products = document.getElementById('your_products');
const profile = document.getElementById('profile');
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid
    } else {
        your_products.style.display = 'none'
        profile.style.display = 'none'
    }
})



//creation of accoun start here

const signup_btn = document.getElementById('signup_btn');

signup_btn.addEventListener('click', ()=>{


    const image = document.getElementById('user-image');
    const user_image = image.files[0];
    const name = document.getElementById('name')
    const middle_name = document.getElementById('middle-name')
    const last_name = document.getElementById('last-name')
    const address = document.getElementById('address')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const confirm_password = document.getElementById('confirm-password')

    //creating object using these variables

    const userInfo = {
        user_image: '',
        name: name.value,
        middle_name: middle_name.value,
        last_name: last_name.value,
        address: address.value,
        email: email.value,
        password: password.value,
    }


    //create account using firebase authentication

    signup_btn.disabled = true
    signup_btn.innerHTML = 'Creating Account...'

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((user)=>{
        console.log(user.user.uid);

        //uploading user image 

        //creating reference for image 

        const imgRef = ref(storage, `user/${user.user.uid}`);

        //now uploading image

        uploadBytes(imgRef, user_image)
        .then(()=>{
            console.log('user image is sucessfully uploaded');

            //now getting uploaded image URL

            getDownloadURL(imgRef)
            .then((url)=>{
                console.log("user profile image url is here ==> ", url)


                // update the userInfo onject

                userInfo.user_image = url

                // now uploading user data to db

                const userDbRef = doc(db, "users", user.user.uid)

                //uploading data

                setDoc(userDbRef, userInfo)
                .then(()=>{
                    console.log('user data is uploaded to db')
                    signup_btn.disabled = false
                    signup_btn.innerHTML = 'Sign Up'
                    window.location.href = '../../index.html'
                })



            }).catch((err)=>{
                alert(err)
                signup_btn.disabled = false
                signup_btn.innerHTML = 'Sign UP'
            })

        }).catch(()=>{
            alert('Error in uploading your image')
            signup_btn.disabled = false
            signup_btn.innerHTML = 'Sign Up'
        })
    }).catch((err)=>{
        alert(err);
        signup_btn.disabled = false
        signup_btn.innerHTML = "Sign Up"
    })
})
