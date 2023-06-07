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
                  alert("A verification link has been sent to your email. Please check your inbox and follow the instructions to verify your email.")
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
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            alert("Failed to create user account. Please check your email and password and try again.");
        }
        console.log(error.code);
        console.log(error.message);
    });
   
    //console.log("Signup Button Clicked")
  })