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

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        // Check if user's email is verified
        if (firebase.auth().currentUser.emailVerified) {
            document.write("You are Signed In")
            window.location.assign('../dashboard.html');
        } else {
            firebase.auth().signOut();
            document.write("Please verify your email before signing in");
        }
    })
    .catch((error) => {
        alert("Wrong Email or Password");
        console.log(error.code);
        console.log(error.message)
    });

}

const signOutFunction = () => {
    auth.signOut()
    .then(() => {
        window.location.assign('signin.html')
    })
    .catch(error => {
        console.error(error);
    })
}

const recover = () => {
    var resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  firebase.auth().sendPasswordResetEmail(email)
    .then(function() {
      alert('Password reset email sent!');
    })
    .catch(function(error) {
      alert(error.message);
    });
});

}



