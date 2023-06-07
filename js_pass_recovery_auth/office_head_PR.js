// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFmFckarVLVdC6puLY1CL3Rn_f7qgMeb0",
    authDomain: "office-head.firebaseapp.com",
    projectId: "office-head",
    storageBucket: "office-head.appspot.com",
    messagingSenderId: "783817698286",
    appId: "1:783817698286:web:ef164eac91aeb5c6d07cff",
    measurementId: "G-8P3V4E3490"
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