import { auth, signOut, onAuthStateChanged } from "./firebase.js"

const userEmail = document.querySelector("#user");

onAuthStateChanged(auth, (user) => {
   if (user) {
      const emailId = user.email;
      userEmail.innerHTML = "<img width='25px' height='25px' src='https://www.svgrepo.com/download/433961/waving-hand.svg'> </img>" +  emailId
      console.log(user);
   } else {
      window.location.href = "./login.html"
   }
});
const btn = document.querySelector("#logout");

btn.addEventListener("click", async () => {
   try {
      btn.innerHTML = "loading..."
      await signOut(auth)
      window.location.href = "../index.html"
   } catch (error) {
      console.log(error);
   }
})