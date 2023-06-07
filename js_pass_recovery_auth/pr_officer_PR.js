// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTfHsVheiXlcx0wDDaRFEHmSYDQaYTbcw",
    authDomain: "pr-officer.firebaseapp.com",
    projectId: "pr-officer",
    storageBucket: "pr-officer.appspot.com",
    messagingSenderId: "232782185994",
    appId: "1:232782185994:web:f2d8db279429123db541f3",
    measurementId: "G-H0YP6H73Q1"
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