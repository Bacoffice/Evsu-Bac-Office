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