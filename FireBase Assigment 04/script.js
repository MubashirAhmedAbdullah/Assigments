import { app, analytics,auth,onAuthStateChanged } from "./utilis/utilis.js";

console.log(app);
console.log(analytics);

onAuthStateChanged(auth, (user) => {
    if (user) {
    
      const uid = user.uid;
      // ...
    } else {
        window.location.href = './login&signup/login&signup.html'
    }
  });