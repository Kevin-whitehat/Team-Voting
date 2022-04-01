import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDyBIIpneD5O2ZHCYMbe8z4AOCbwVs9kAk",
    authDomain: "pro-67-e157b.firebaseapp.com",
    projectId: "pro-67-e157b",
    storageBucket: "pro-67-e157b.appspot.com",
    messagingSenderId: "1004865275978",
    appId: "1:1004865275978:web:a873225ef64dfb5d1c3eb3",
    measurementId: "G-JM640TPBST"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();