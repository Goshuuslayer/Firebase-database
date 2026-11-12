import { auth } from "./firebase-config.js";

import {
    signInWithEmailAndPassword
} from
"https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email.value,
            password.value
        );

        console.log("Logged in user:", userCredential.user);
        alert("Login successful!");

    } catch (error) {
        console.error(error);
        alert(error.message);
    }
});
