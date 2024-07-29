import { auth , signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
   
    button.value = "loading...";

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        // Create user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "./dashboard.html"
        console.log(userCredential);

        form.reset();
    } catch (error) {
        Swal.fire({
            title: "Wrong",
            text: error,
            icon: "error",
            footer: "Please check your credentials"
          });
        console.error("Error creating user:", error);
    }
});