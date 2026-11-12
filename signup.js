import { auth, db } from "./firebase-config.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const signupForm = document.getElementById("signupForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const contactNo = document.getElementById("contactNo");
const password = document.getElementById("password");

signupForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  console.log("Signup button clicked");

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email.value,
      password.value,
    );

    const user = userCredential.user;

    console.log("User created:", user);

    // Save user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name.value,
      email: email.value,
      contactNo: contactNo.value,
      uid: user.uid,
      createdAt: new Date(),
    });

    console.log("Data saved in Firestore");

    alert("Account created successfully!");

    // Redirect to login page
    window.location.href = "./login.html";
  } catch (error) {
    console.error("Signup Error:", error);

    alert(error.message);
  }
});
