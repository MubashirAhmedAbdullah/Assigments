import {
    app,
    analytics,
    auth,
    createUserWithEmailAndPassword,
    doc,
    getDoc,
    setDoc,
    getDownloadURL,
    db,
    ref,
    storage,
    uploadBytes
} from "../../utilis/utilis.js";

console.log(app);
console.log(analytics);
console.log(db);
console.log(auth);
console.log(storage);


const sign_up_btn = document.getElementById('sign_up');


sign_up_btn.addEventListener('click', () => {
    sign_up_btn.innerHTML = 'Creating Your Account ...'
    sign_up_btn.disabled = true;

    //getting all element using there id for create an object

    const userImage = document.getElementById('userImage');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const password = document.getElementById('password').value;

    //creating object using these varibles value

    const userInfo = {
        img: userImage,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: emailAddress,
        password: password
    }

    console.log(userInfo);


    //The account creation start here

    createUserWithEmailAndPassword(auth, emailAddress, password)
        .then((user) => {
            console.log(user.user.uid);
            // uploading user profile image to local storage
            const userRef = ref(storage, user.user.uid);

            uploadBytes(userRef, userImage)
                .then(() => {
                    console.log("user profile image sucessfully uploaded");

                    // getting the user profile image url
                    getDownloadURL(userRef)
                        .then((url) => {
                            console.log(url);

                            //update url in userinfo

                            userInfo.img = url

                            //uploading userinfo to db

                            // creating ref for db

                            const userRefDb = doc(db, "user", user.user.uid)

                            // uploading data to db

                            setDoc(userRefDb, userInfo)
                                .then(() => {
                                    console.log("user info sucessfully uploaded to db")
                                    window.location.href = '../../index.html'
                                    sign_up_btn.innerHTML = "Sign Up"
                                    sign_up_btn.disabled = false
                                })
                        }).catch(() => {
                            console.log("failed to get url");
                            alert('we are faceing an error to creating your profile')
                            sign_up_btn.innerHTML = 'Sign Up'
                            sign_up_btn.disabled = false;

                        })
                }).catch(() => {
                    console.log("we are faceing an error to creating your profile");
                    alert('we are faceing an error to creating your profile')
                    sign_up_btn.innerHTML = "Sign Up"
                    sign_up_btn.disabled = false;
                })
        }).catch((err) => {
            console.log(err.message);
            sign_up_btn.innerHTML = "Sign Up"
            sign_up_btn.disabled = false;
        })
});