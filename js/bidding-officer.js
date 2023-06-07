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

//declaration of SignUp
var SignUp = document.getElementById("submit-btn")

// Sign up function
SignUp.addEventListener("click", function(event){
    event.preventDefault();
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    //console.log(email, password)
  
    //firebase signup
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
          // Send email verification link
          result.user.sendEmailVerification()
              .then(() => {
                  document.write("A verification link has been sent to your email. Please check your inbox and follow the instructions to verify your email.")
                  console.log(result)
              })
              .catch((error) => {
                  console.log(error.code);
                  console.log(error.message);
              });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
            alert("Email address is already in use. Please use a different email.");
            // Clear password field
            document.getElementById("password").value = "";
        } else {
            alert("Failed to create user account. Please check your email and password and try again.");
        }
        console.log(error.code);
        console.log(error.message);
    });
   
    //console.log("Signup Button Clicked")
  })
  
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
            window.location.assign('dashboard.html');
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



