
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC5QrAhBFFRI64ddJW-_UVtP-quN0A8G1o",
    authDomain: "javascript-testing-a8d03.firebaseapp.com",
    projectId: "javascript-testing-a8d03",
    storageBucket: "javascript-testing-a8d03.appspot.com",
    messagingSenderId: "651282558529",
    appId: "1:651282558529:web:d2772344cfd14fd4bda0c0",
    measurementId: "G-ECDJ4M5668"
};


const app = initializeApp(firebaseConfig);
console.log(app);
const analytics = getAnalytics(app);
console.log(analytics);
const db = getFirestore(app);
console.log(db);



const todoInput = document.querySelector('#todoInput');
const addBtn = document.getElementById('addToDo');
const todo_list = document.getElementById('todo_list');

addBtn.addEventListener('click', addToDoToDataBase());
async function addToDoToDataBase() {
    try {
        const docRef = await addDoc(collection(db, "todo's"), {
            createdTime: new Date(),
            todo: todoInput.value,
        });
        console.log("Document written with ID: ", docRef.id);
        console.log(docRef);
        console.log(todoInput.value);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
