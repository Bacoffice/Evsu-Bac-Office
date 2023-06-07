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
          window.location.href = ("../checking-officer-dashboard/checking_officer_successful_pr.html");
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
        window.location.assign('../login_pages/checkingofficer.html')
    })
    .catch(error => {
        console.error(error);
    })
}