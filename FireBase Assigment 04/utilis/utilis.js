
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyADNbltoU10dq6lYBI5SJNIPy6GQHTuc0Y",
    authDomain: "event-manager-app-3f468.firebaseapp.com",
    projectId: "event-manager-app-3f468",
    storageBucket: "event-manager-app-3f468.appspot.com",
    messagingSenderId: "886909347208",
    appId: "1:886909347208:web:84e05e408238470bbe863d",
    measurementId: "G-V5N47RFWPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {
    app,
    analytics,
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword
}