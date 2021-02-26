import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyAIL5b10XiE3-urXAF_jSbYDsr5fzEMlvo",
    authDomain: "todo-app-2df8b.firebaseapp.com",
    projectId: "todo-app-2df8b",
    storageBucket: "todo-app-2df8b.appspot.com",
    messagingSenderId: "350697482191",
    appId: "1:350697482191:web:58f9b27bf204a1c59dd4ba",
    measurementId: "G-RY8YS0WFEW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
export {db};