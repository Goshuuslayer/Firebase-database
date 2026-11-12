import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAOlfTv2qIfPUE8yM4FlphEftdaOFiPHdM",
  authDomain: "test-users-e090a.firebaseapp.com",
  projectId: "test-users-e090a",
  storageBucket: "test-users-e090a.firebasestorage.app",
  messagingSenderId: "834600301804",
  appId: "1:834600301804:web:5a75d9daebea1120b221c9",
  measurementId: "G-0D0VXWLX94",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
