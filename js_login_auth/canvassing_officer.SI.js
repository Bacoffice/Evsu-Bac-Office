// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCclhAIA3E7TTvFlL1mfQ35oZu0XeQpaqA",
    authDomain: "canvassing-officer.firebaseapp.com",
    projectId: "canvassing-officer",
    storageBucket: "canvassing-officer.appspot.com",
    messagingSenderId: "840644224155",
    appId: "1:840644224155:web:3d76cbb95757817a94923e",
    measurementId: "G-2E86W4E7QT"
});

const auth = firebase.auth();

// Function to set a session cookie
function setSessionCookie(name, value) {
  document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}


// Function to delete a cookie
function deleteCookie(email) {
  document.cookie = email + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
  
  // Sign In function
  const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Check if user's email is verified
        if (firebase.auth().currentUser.emailVerified) {
          //const randomString = generateRandomString(10); // generate random string
          //const encodedHash = encryptString(randomString);
          setSessionCookie("email", email); // Set the "email" session cookie
          sessionStorage.setItem("email", email); 
          window.location.href = ("../canvassing-officer-dashboard/canvassing_officer_dashboard.html");
        } else {
          firebase.auth().signOut();
          sessionStorage.removeItem("email");
          deleteCookie("email"); // Remove the "email" cookie
          alert("Please verify your email before signing in");
          document.getElementById("email").value = "";
          document.getElementById("password").value = "";
        }
      })
      .catch((error) => {
        alert("Wrong Email or Password");
        console.log(error.code);
        console.log(error.message);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      });
  }

const signOutFunction = () => {
    auth.signOut()
    .then(() => {
        sessionStorage.removeItem("email");
        window.location.assign('../login_pages/canvassingofficer.html')
    })
    .catch(error => {
        console.error(error);
    })
}