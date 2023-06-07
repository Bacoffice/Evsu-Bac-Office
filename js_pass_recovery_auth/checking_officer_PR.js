// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyALNdTu3ZkPJtluodw-6aSWsrmjFEHCp8I",
    authDomain: "checking-officer.firebaseapp.com",
    projectId: "checking-officer",
    storageBucket: "checking-officer.appspot.com",
    messagingSenderId: "224997300634",
    appId: "1:224997300634:web:606c44eb8789a464ce4223",
    measurementId: "G-V4SLYT2F6Y"
});

const auth = firebase.auth();

var resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
      alert('Password reset email sent!');
      document.getElementById("email").value = "";
    })
    .catch(function(error) {
      alert('Email does not exist');
      document.getElementById("email").value = "";
    });
});