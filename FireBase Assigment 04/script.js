import {
    auth,
    storage,
    db,
    signOut,
    getDoc,
    doc,
    onAuthStateChanged,
    getDocs,
    collection,
    updateDoc,
    arrayUnion,
    arrayRemove,
} from "./utilis/utilis.js";

console.log(db);

console.log(auth, signOut);

const login_link = document.getElementById('login_link');
const logout_btn = document.getElementById('logout-btn');
const logout = document.getElementById('logout');
const profile = document.getElementById('profile');
const product_container = document.getElementById('product-container'); 



logout_btn.addEventListener('click', () => {
    signOut(auth).then(() => {
        window.location.href = '/'
    })
})

profile.addEventListener('click', () => {
    window.location.href = './user Profile/index.html'
})
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;


        login_link.style.display = 'none'
        logout_btn.style.display = 'inline-block'
        logout.style.display = 'inline-block'
        profile.style.display = 'inline-block'


        getuserInfo(uid);
    } else {
        login_link.style.display = 'inline-block'
        logout_btn.style.display = 'none'
        logout.style.display = 'none'
        profile.style.display = 'none'
    }
})



function getuserInfo(uid) {
    const userRef = doc(db, "user", uid);
    getDoc(userRef)
    .then((data)=>{
        console.log(data.id);
        console.log(data.data);
        profile.src = data.data()?.img;
    })
}


// async function getAllProducts() {
//     try{
//         const querySnapshot = await getDocs(collection(db, "products"));
//         product_container.innerHTML = ""
//     }
// }

async function getAllProducts() {
    try{
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log(querySnapshot);
        product_container.innerHTML = "";
        querySnapshot.forEach((doc) =>{
            console.log(`${doc.id} => ${doc.data()}`);

                const products = doc.data();


                console.log(products);

                const {name, description, category, image, price} = products


                const ele = `<div class="product-container">
                <div class="product-card">
                    <img src="${image}" alt="Product Image" class="product-image">
                    <div class="product-details">
                        <h3 class="product-name">${name}</h3>
                        <p class="product-description">${description}</p>
                        <p class="product-price">${price}</p>
                        <p class="product-category">Category: ${category}</p>
                    </div>
                </div>
            </div>`


            product_container.innerHTML += ele;
            console.log(products);

            })
    }catch(err) {
        console.log("error");
        alert(err)
    }
}


getAllProducts()
