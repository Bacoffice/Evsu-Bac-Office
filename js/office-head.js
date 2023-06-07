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
        document.write("Wrong Email or Password");
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




