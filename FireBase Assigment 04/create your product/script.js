import {
    ref,
    storage,
    uploadBytes,
    getDownloadURL,
    db,
    collection,
    addDoc,
    auth,
} from "../utilis/utilis.js";


console.log(auth);
console.log(db);
console.log(storage);


const add_product = document.getElementById('add_product');

add_product.addEventListener('click', ()=>{

    add_product.innerHTML = 'Creating Your Product....';
    add_product.disabled = true;

    //creating varibles for getting getting values to create product

     const productName = document.getElementById('product-name');
     const productDescription = document.getElementById('product-description');
     const productPrice = document.getElementById('product-price');
     const productImage = document.getElementById('product-image');
     const productCategory = document.getElementById('product-category');

     //creating object using these varibles

     const productInfo = {
        name: productName.value,
        description: productDescription.value,
        price: productPrice.value,
        image: productImage,
        category: productCategory.value,
     }

     //creating image reference for uploading to storage

     const imgRef = ref(storage, productImage.value);
     uploadBytes(imgRef, productInfo.image)
     .then(()=>{
        console.log("image uploaded sucessfully");
        
        //getting image url
        getDownloadURL(imgRef)
        .then((url)=>{
            console.log("image url is =>", url);

            //update the productInfo object
            productInfo.image = url;

            // add poduct data to db

            const productCollection = collection(db, "products");
            addDoc(productCollection, productInfo)
            .then(()=>{
                console.log("document added to DB");
                window.location.href = '../index.html'

                add_product.innerHTML = "Add Product"
                add_product.disabled = false;
            })
        }).catch(()=>{
            console.log("error in getting image url");
        })
     }).catch(()=>{
        console.log("image upload failed");
     })


     console.log(productInfo);
});