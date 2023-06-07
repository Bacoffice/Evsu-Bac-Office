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