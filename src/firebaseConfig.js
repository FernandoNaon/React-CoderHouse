import firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/storage'

const firebaseConfig =  firebase.initializeApp({
    apiKey: "AIzaSyC6KhRzsiKpe6usMTHSF3rM9X0gpTUJgpo",
    authDomain: "mi-app-74f42.firebaseapp.com",
    projectId: "mi-app-74f42",
    storageBucket: "mi-app-74f42.appspot.com",
    messagingSenderId: "47370163714",
    appId: "1:47370163714:web:76573d2edbcae26578b91b"
});


export const getFirebase =  () =>{
    return firebaseConfig
}

export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
}