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

// signup_btn.addEventListener('click', ()=>{


//     const image = document.getElementById('user-image');
//     const user_image = image.files[0];
//     const name = document.getElementById('name')
//     const middle_name = document.getElementById('middle-name')
//     const last_name = document.getElementById('last-name')
//     const address = document.getElementById('address')
//     const email = document.getElementById('email')
//     const password = document.getElementById('password')
//     const confirm_password = document.getElementById('confirm-password')

//     //creating object using these variables

//     const userInfo = {
//         user_image: '',
//         name: name.value,
//         middle_name: middle_name.value,
//         last_name: last_name.value,
//         address: address.value,
//         email: email.value,
//         password: password.value,
//     }

//     console.log(userInfo);


//     //create account using firebase authentication

//     signup_btn.disabled = true
//     signup_btn.innerHTML = 'Creating Account...'

//     createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
//     .then((user)=>{
//         console.log(user.user.uid);

//         //uploading user image 

//         //creating reference for image 

//         const imgRef = ref(storage, `user/${user.user.uid}`);
//         console.log(imgRef);

//         //now uploading image

//         uploadBytes(imgRef, user_image)
//         .then(()=>{
//             console.log('user image is sucessfully uploaded');

//             //now getting uploaded image URL

//             getDownloadURL(imgRef)
//             .then((url)=>{
//                 console.log("user profile image url is here ==> ", url)


//                 // update the userInfo onject

//                 userInfo.user_image = url

//                 // now uploading user data to db

//                 const userDbRef = doc(db, "users", user.user.uid)

//                 //uploading data

//                 setDoc(userDbRef, userInfo)
//                 .then(()=>{
//                     console.log('user data is uploaded to db')
//                     signup_btn.disabled = false
//                     signup_btn.innerHTML = 'Sign Up'
//                     window.location.href = '../../index.html'
//                 })



//             }).catch((err)=>{
//                 alert(err)
//                 signup_btn.disabled = false
//                 signup_btn.innerHTML = 'Sign UP'
//             })

//         }).catch(()=>{
//             alert('Error in uploading your image')
//             signup_btn.disabled = false
//             signup_btn.innerHTML = 'Sign Up'
//         })
//     }).catch((err)=>{
//         alert(err);
//         signup_btn.disabled = false
//         signup_btn.innerHTML = "Sign Up"
//     })
// })



signup_btn.addEventListener('click', () => {


    //create varibles for getting user input data form html

    const user_image = document.getElementById('user-image').files[0];
    const name = document.getElementById('name');
    const middle_name = document.getElementById('middle-name');
    const last_name = document.getElementById('last-name');
    const address = document.getElementById('address');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm_password = document.getElementById('confirm-password');



    // creating object useing these variables

    const userInfo = {
        profileImage: "",
        name: name.value,
        middle_name: middle_name.value,
        last_name: last_name.value,
        address: address.value,
        email: email.value,
        password: password.value,
        confirm_password: confirm_password.value
    }



    signup_btn.disabled = true;
    signup_btn.innerHTML = "Creating Your Account..."

    if (password.value === confirm_password.value) {


        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((user) => {
                console.log(user.user.uid);

                //uploading user image to local storage

                //create reference for image

                const imageRef = ref(storage, `user/${user.user.uid}`);
                console.log(imageRef);

                uploadBytes(imageRef, user_image)
                    .then(() => {
                        console.log('user image is succesfully uploaded to storage');

                        //update userInfo object 

                        getDownloadURL(imageRef)
                            .then((url) => {
                                console.log(url);


                                userInfo.profileImage = url;

                                //upload your data to db

                                //creating reference


                                const userDbRef = doc(db, "users", user.user.uid);

                                setDoc(userDbRef, userInfo)
                                    .then(() => {
                                        console.log('user data is succesfully uploaded to db');
                                        signup_btn.disabled = false;
                                        signup_btn.innerHTML = "Sign Up"
                                        window.location.href = '../../index.html'
                                    }).catch((err) => {
                                        console.log(err);
                                        alert(err)
                                        signup_btn.disabled = false;
                                        signup_btn.innerHTML = "Sign Up"
                                    })
                            }).catch((err) => {
                                alert(err);
                                signup_btn.disabled = false;
                                signup_btn.innerHTML = "Sign Up";
                            })
                    }).catch(() => {
                        alert('error in creating your account');
                        signup_btn.disabled = false;
                        signup_btn.innerHTML = "Sign UP"
                    })
            }).catch((err) => {
                alert(err);
                signup_btn.disabled = false;
                signup_btn.innerHTML = "Sign Up";
            })

    } else {
        alert('Password is not same');
        signup_btn.innerHTML = "Sign Up";
        signup_btn.disabled = false;
    }
})
