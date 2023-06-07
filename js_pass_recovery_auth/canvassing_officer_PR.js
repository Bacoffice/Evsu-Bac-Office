// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCclhAIA3E7TTvFlL1mfQ35oZu0XeQpaqA",
    authDomain: "canvassing-officer.firebaseapp.com",
    projectId: "canvassing-officer",
    storageBucket: "canvassing-officer.appspot.com",
    messagingSenderId: "840644224155",
    appId: "1:840644224155:web:3d76cbb95757817a94923e",
    measurementId: "G-2E86W4E7QT"
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
