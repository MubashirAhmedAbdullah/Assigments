import { app, analytics, auth, onAuthStateChanged  } from "./utilis/utilis.js";

console.log(app);
console.log(analytics);
console.log(auth);

// on auth sate change function

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      window.location.href = 'index.html'
    } else {
      window.location.href = './authentication/signup&login.html'
    }
  });
