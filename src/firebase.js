import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyAulMwhi6ihmiz7XeC_LhTPtnONjI3YkVA",
    authDomain: "twitter-clone-2024b.firebaseapp.com",
    projectId: "twitter-clone-2024b",
    storageBucket: "twitter-clone-2024b.appspot.com",
    messagingSenderId: "1096266828267",
    appId: "1:1096266828267:web:2c86ee42162bf363df71ae"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore(); 

  export default db; 