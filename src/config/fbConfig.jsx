import firebase from "firebase";
  var config = {
    apiKey: "AIzaSyDtT9sukYyVIqPQY2VrUkr19p8UFgGCWmg",
    authDomain: "phone-directory-88c5c.firebaseapp.com",
    databaseURL: "https://phone-directory-88c5c.firebaseio.com",
    projectId: "phone-directory-88c5c",
    storageBucket: "phone-directory-88c5c.appspot.com",
    messagingSenderId: "846920865840"
  };
  firebase.initializeApp(config);

var fire = firebase.database();
export { fire };
