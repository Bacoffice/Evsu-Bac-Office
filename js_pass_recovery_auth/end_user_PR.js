// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAseZa8Z7gqYGfZrZk3XZO0n-cxxTv6UgM",
  authDomain: "end-users-c1928.firebaseapp.com",
  projectId: "end-users-c1928",
  storageBucket: "end-users-c1928.appspot.com",
  messagingSenderId: "90430014988",
  appId: "1:90430014988:web:951327202c3fd229b75029",
  measurementId: "G-8QY82MVZL5"
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