import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#signup-form");
const fullNameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#btn");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    
    const fullName = fullNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    
    try {
        button.value = "loading...";
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        window.location.href = "./login.html"
        // Get user from the userCredential
        const user = userCredential.user;

        // Optionally, update the user's profile with the full name
        await user.updateProfile({
            displayName: fullName
        });
        
        form.reset();
    } 
    catch (error) {
        Swal.fire({
            title: "Wrong",
            text: error,
            icon: "error",
            footer: "Please check your credentials"
        });
        console.error("Error creating user:", error);
        button.value = "Sign Up"
    }
});