// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB46sIu3Z19kRLfZN8pJ6d3ZVR42gL0L68",
    authDomain: "company-supplier.firebaseapp.com",
    projectId: "company-supplier",
    storageBucket: "company-supplier.appspot.com",
    messagingSenderId: "174637661944",
    appId: "1:174637661944:web:4b1a15c737158109aac50d",
    measurementId: "G-175YY2HE97"
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