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