
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
  import {getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDhmppjezIwwL5zFvrHit0jUBX3QtZAxZU",
    authDomain: "job-portal-d088e.firebaseapp.com",
    projectId: "job-portal-d088e",
    storageBucket: "job-portal-d088e.appspot.com",
    messagingSenderId: "112086623822",
    appId: "1:112086623822:web:b2b5961d9cc536ff02451f"
  };

 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  export{
    app,
    auth,
    db,
    createUserWithEmailAndPassword,
    doc,
    setDoc,
    signInWithEmailAndPassword,
  }