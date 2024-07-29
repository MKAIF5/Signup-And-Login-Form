// Type js liabrary use 
const typed = new Typed('#element', {
    strings: ['WEB DESIGNER' , 'FRONTEND DEVELPOR' ,'MERN DEVELPOR' ],
    typeSpeed: 50,
});

// firebase work

import { auth, onAuthStateChanged } from "./firebase.js"

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = "./dashboard.html"
    } else {
       window.location.href = "./login.html"
    }
 });