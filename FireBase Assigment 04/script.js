import { app, analytics, auth, onAuthStateChanged, signOut } from "./utilis/utilis.js";

console.log(app);
console.log(analytics);
console.log(auth);

// on auth sate change function

onAuthStateChanged(auth, (user) => {
  if (user) {

    // const uid = user.uid;
    window.location.href = '/'
  } else {
    window.location.href = './user/signup&login.html'
  }
});

const logout = document.getElementById('logout');

logout.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log("signout succesfully");
    window.location.href = './user/signup&login.html'
  }).catch((err) => {
    console.log(err.message);
  })
})
