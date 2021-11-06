import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAsSkU2OrP2W7eITyKqBJ7DwvH0qGxTcNk",
    authDomain: "nyou-db.firebaseapp.com",
    projectId: "nyou-db",
    storageBucket: "nyou-db.appspot.com",
    messagingSenderId: "392082754759",
    appId: "1:392082754759:web:f8335bb70f9a7194ba82e2",
    measurementId: "G-8TWHJM5H5F"
};

// const firebaseConfig = {
//     apiKey: "AIzaSyA7yXqRkZXTl_Ks5yJGSTSG4JcjME0fZMA",
//     authDomain: "nyoudb.firebaseapp.com",
//     projectId: "nyoudb",
//     storageBucket: "nyoudb.appspot.com",
//     messagingSenderId: "987760274647",
//     appId: "1:987760274647:web:4a72d93b62950c115cd492",
//     measurementId: "G-WV6WSNF824"
// };
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;