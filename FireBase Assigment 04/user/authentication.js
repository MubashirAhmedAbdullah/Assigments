// import {
//     auth, collection, db, createUserWithEmailAndPassword, ref, uploadBytes, getDownloadURL, storage, doc,
//     setDoc
// } from "../utilis/utilis.js";

// console.log(auth);
// console.log(db);
// console.log(storage);


// // adding data to DB and then signin and signup user

// const sign_up_btn = document.getElementById('sign_up-btn');
// const signup_form = document.getElementById('signup_form');
// // const collection = collection(db, "users")

// signup_form.addEventListener('submit', (e) => {
//     e.preventDefault
//     console.log(e);
//     console.log(e.target);


//     const img = e.target[0].files[0];
//     const name = e.target[1].value;
//     const LastName = e.target[2].value;
//     const PhoneNumber = e.target[3].value;
//     const EmailAddress = e.target[4].value;
//     const Password = e.target[5].value;


//     const userInformation = {
//         img,
//         name,
//         LastName,
//         PhoneNumber,
//         EmailAddress,
//         Password
//     }


//     //creation of accpount start here

//     sign_up_btn.disabled = true
//     sign_up_btn.innerText = "Craeting..."

//     createUserWithEmailAndPassword(auth, EmailAddress, Password)
//         .then((user) => {
//             console.log(user.user.uid);
//             //upload user profile image
//             const userRef = ref(storage, `user/${user.user.uid}`);
//             uploadBytes(userRef, img)
//                 .then(() => {
//                     console.log("user profile image uploaded")
//                     //getting user profle image
//                     getDownloadURL(userRef)
//                         .then(() => {
//                             console.log("user profile image url", url);
//                             //update userinfo object

//                             userInformation.img = url;

//                             //creating user document data ref for DB

//                             const userDbRef = doc(db, "users", user.user.uid);
//                             //set data to data base
//                             setDoc(userDbRef, userInformation)
//                                 .then(() => {
//                                     console.log('user data is added to dataBase sucessfully');
//                                     window.location.href = "/"
//                                     sign_up_btn.disabled = false
//                                     sign_up_btn.innerText = "Signup"

//                                 });


//                         }).catch(() => {
//                             console.log("error in getting user profile image url")
//                         })
//                 }).catch(() => {
//                     console.log("We face an error to upload user profile image");
//                     sign_up_btn.disabled = false
//                     sign_up_btn.innerText = "Signup"
//                 })

//         }).catch((err) => {
//             alert(err)
//             sign_up_btn.disabled = false
//             sign_up_btn.innerText = "Signup"

//         });
//     console.log(userInformation);

// });










import {
    auth,
    collection,
    db,
    createUserWithEmailAndPassword,
    ref,
    uploadBytes,
    getDownloadURL,
    storage,
    doc,
    setDoc
} from "../utilis/utilis.js";

console.log(auth);
console.log(db);
console.log(storage);

// adding data to DB and then signin and signup user

const sign_up_btn = document.getElementById('sign_up-btn');
const signup_form = document.getElementById('signup_form');

signup_form.addEventListener('submit', () => {
  

    const img = document.getElementById('profile_image');
    const name = document.getElementById('User_name').value;
    const LastName = document.getElementById('User_last_name').value;
    const PhoneNumber = document.getElementById('phone_number').value;
    const EmailAddress = document.getElementById('email-address').value;
    const Password = document.getElementById('confirm_password').value;

    const userInformation = {
        img,
        name,
        LastName,
        PhoneNumber,
        EmailAddress,
        Password
    };

    // creation of account start here

    sign_up_btn.disabled = true;
    sign_up_btn.innerText = "Creating...";

    createUserWithEmailAndPassword(auth, EmailAddress, Password)
        .then((user) => {
            console.log(user.user.uid);
            // upload user profile image
            const userRef = ref(storage, `user/${user.user.uid}`);
            uploadBytes(userRef, img)
                .then(() => {
                    console.log("user profile image uploaded");
                    // getting user profile image
                    getDownloadURL(userRef)
                        .then((url) => {
                            console.log("user profile image url", url);
                            // update userinfo object
                            userInformation.img = url;

                            // creating user document data ref for DB
                            const userDbRef = doc(db, "users", user.user.uid);
                            // set data to database
                            setDoc(userDbRef, userInformation)
                                .then(() => {
                                    console.log('user data is added to database successfully');
                                    window.location.href = "/";
                                    sign_up_btn.disabled = false;
                                    sign_up_btn.innerText = "Signup";
                                });
                        })
                        .catch(() => {
                            console.log("error in getting user profile image url");
                        });
                })
                .catch(() => {
                    console.log("We face an error to upload user profile image");
                    sign_up_btn.disabled = false;
                    sign_up_btn.innerText = "Signup";
                });
        })
        .catch((err) => {
            alert(err);
            sign_up_btn.disabled = false;
            sign_up_btn.innerText = "Signup";
        });

    console.log(userInformation);
});


