
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js"
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes ,
    getDownloadURL 
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";




const firebaseConfig = {
    apiKey: "AIzaSyA4Le0RO3YKx1PrsFxhV0_2YnGHvLFFGCw",
    authDomain: "e-commerce-web-e7040.firebaseapp.com",
    projectId: "e-commerce-web-e7040",
    storageBucket: "e-commerce-web-e7040.appspot.com",
    messagingSenderId: "115927171395",
    appId: "1:115927171395:web:aa67eb1f19f7b8cd54eff6",
    measurementId: "G-70LH4JQY7B"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export {
    app,
    analytics,
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
    collection,
    addDoc,
    storage,
    ref,
    uploadBytes ,
    getDownloadURL,
    signOut
}