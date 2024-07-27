import {
    auth,
    app,
    analytics,
    onAuthStateChanged,
    signOut,
    doc,
    db,
    getDoc,
    ref,
    storage,
    uploadBytes,
    getDownloadURL,
    collection,
    addDoc
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



// firebase starts here

console.log(auth);
console.log(db);
console.log(app);
console.log(analytics);

const login_link = document.getElementById('login_link');
const profile_images = document.getElementById('profile_images');
const logout_btn = document.getElementById('logout_btn');

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        login_link.style.display = 'none'


        getUserInfo(uid);
    } else {
        console.log('user is not login ');
    }
})



logout_btn.addEventListener('click', () => {
    signOut(auth)
        .then(() => {
            window.location.href = '../index.html';
        }).catch((err) => {
            const errMessage = err.message;
            alert(errMessage);
        })
})


function getUserInfo(uid) {
    const userRef = doc(db, "users", uid);
    getDoc(userRef)
        .then((data) => {
            console.log(data.id);
            console.log(data.data());
            profile_images.src = data.data()?.user_image;
        })
}

// getUserInfo();




// now add the product data to db and send the image to local storage


// const add_products = document.getElementById('add-products');

// add_products.addEventListener('click', () => {
    
    
//     add_products.disabled = true;
//     add_products.innerHTML = "Creating Your Product...."

//     // get the all elements form html by using there id's

//     const product_image = document.getElementById('product-image').files[0];
//     const product_name = document.getElementById('product-name');
//     const product_description = document.getElementById('product-description');
//     const product_category = document.getElementById('product-category');
//     const product_price = document.getElementById('product-price');
//     const product_rating = document.getElementById('product-rating');


//     //now create a product info object using these variables

//     const productInfo = {
//         product_image: '',
//         product_name: product_name.value,
//         product_description: product_description.value,
//         product_category: product_category.value,
//         product_price: product_price.value,
//         product_rating: product_rating.value,
//     }



//     //now uploading product image to local storage

//     //creating reference

//     const productImageRef = ref(storage, product_image);
//     uploadBytes(productImageRef, product_image)
//         .then(() => {
//             console.log('image uploaded to storage sucessfully');

//             //now getting the image url for db
//             getDownloadURL(productImageRef)
//                 .then((url) => {
//                     console.log('image url is her ==>', url);

//                     // update the product info object
//                     productInfo.proimage = url;

//                     //uploading data to db
//                     //creating reference

//                     const productCollecttion = collection(db, "products");
//                     addDoc(productCollecttion, productInfo)
//                     .then(()=>{
//                         window.location.href = '../../index.html'
//                         console.log('product added sucessfully');
//                         add_products.disabled = false;
//                         add_products.value = 'Add Product';
//                     }).catch(()=>{
//                         alert('Error in Uploading data to db')
//                         add_products.disabled = false;
//                         add_products.innerHTML = "Add Product"
//                     })
//                 }).catch(() => {
//                     alert('error in uploading image')
//                     add_products.disabled = false;
//                     add_products.innerHTML = "Add Product"
//                 })
//         }).catch((err)=>{
//             alert(err);
//             add_products.disabled = false;
//             add_products.innerHTML = "Add Product"
//         })
// });


const add_products = document.getElementById('add-products');

add_products.addEventListener('click', () => {
    add_products.disabled = true;
    add_products.innerHTML = "Creating Your Product...."

    // Get all elements from HTML by using their IDs
    const product_image = document.getElementById('product-image').files[0];
    const product_name = document.getElementById('product-name').value;
    const product_description = document.getElementById('product-description').value;
    const product_category = document.getElementById('product-category').value;
    const product_price = document.getElementById('product-price').value;
    const product_rating = document.getElementById('product-rating').value;

    // Create a product info object using these variables
    const productInfo = {
        product_image: '',
        product_name: product_name,
        product_description: product_description,
        product_category: product_category,
        product_price: product_price,
        product_rating: product_rating,
    };

    // Now uploading product image to local storage
    const productImageRef = ref(storage, `product_images/${product_image.name}`);
    uploadBytes(productImageRef, product_image)
        .then(() => {
            console.log('Image uploaded to storage successfully');

            // Now getting the image URL for db
            getDownloadURL(productImageRef)
                .then((url) => {
                    console.log('Image URL is here ==>', url);

                    // Update the product info object
                    productInfo.product_image = url;

                    // Uploading data to db
                    const productCollection = collection(db, "products");
                    addDoc(productCollection, productInfo)
                        .then(() => {
                            window.location.href = '../../index.html';
                            console.log('Product added successfully');
                            add_products.disabled = false;
                            add_products.innerHTML = 'Add Product';
                        }).catch((err) => {
                            alert('Error in uploading data to db: ' + err.message);
                            add_products.disabled = false;
                            add_products.innerHTML = "Add Product";
                        });
                }).catch((err) => {
                    alert('Error in getting download URL: ' + err.message);
                    add_products.disabled = false;
                    add_products.innerHTML = "Add Product";
                });
        }).catch((err) => {
            alert('Error in uploading image: ' + err.message);
            add_products.disabled = false;
            add_products.innerHTML = "Add Product";
        });
});
