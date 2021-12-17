import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyAsSkU2OrP2W7eITyKqBJ7DwvH0qGxTcNk",
//     authDomain: "nyou-db.firebaseapp.com",
//     projectId: "nyou-db",
//     storageBucket: "nyou-db.appspot.com",
//     messagingSenderId: "392082754759",
//     appId: "1:392082754759:web:f8335bb70f9a7194ba82e2",
//     measurementId: "G-8TWHJM5H5F"
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyT_CmaJ3IV8LqeLZMUUiu7McqsBHnVTI",
    authDomain: "talk-ed9c0.firebaseapp.com",
    projectId: "talk-ed9c0",
    storageBucket: "talk-ed9c0.appspot.com",
    messagingSenderId: "605171636237",
    appId: "1:605171636237:web:c4d3b95abe8ebadad71d44",
    measurementId: "G-4XLEW7TVH1"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;