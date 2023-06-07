// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCEd2gfxOpW1BeSfy0uv0blkGZXEf3d2cI",
    authDomain: "bidding-officer.firebaseapp.com",
    projectId: "bidding-officer",
    storageBucket: "bidding-officer.appspot.com",
    messagingSenderId: "793993860944",
    appId: "1:793993860944:web:27e3212406f76312d73e55",
    measurementId: "G-CBN0ZG7QRY"
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