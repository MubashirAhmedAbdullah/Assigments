import {
    db,
    getDoc,
    doc,
    setDoc,
    ref,
    storage,
    collection,
    updateDoc,
    query,
    auth,
    onAuthStateChanged
} from "../utilis/utilis.js";


console.log(storage);
console.log(db);
console.log(auth);

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        getUserInfo(uid);
        console.log(uid);
    } else {
        console.log("no user");
    }
})


function getUserInfo(uid) {

    const profile_pic = document.getElementById('profile-pic');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document .getElementById('phone');
    const address = document.getElementById('address');
    
    
    //creating object using these variables

    const userInfo = {
        img : profile_pic,
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
    }


    const userRef = doc(db, "user", uid)
    getDoc(userRef)
        .then((data) => {
            console.log(data);
            console.log(data.id);
            console.log(data.data());

            profile_pic.src = data.data()?.img;
            name.value = data.data()?.firstName;
            email.value = data.data()?.email;
            phone.value = data.data()?.phoneNumber;
            address.value = data.data()?.addrees;
        
        })
}