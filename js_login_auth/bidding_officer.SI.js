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

// Generate a random string of length n
//const generateRandomString = (n) => {
   // const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  //  let result = '';
   // for (let i = 0; i < n; i++) {
  //    result += characters.charAt(Math.floor(Math.random() * characters.length));
  //  }
  //  return result;
 // }

 // function encryptString(str) {
  //  const key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
  //  const iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');
  //  const encrypted = CryptoJS.AES.encrypt(str, key, { iv: iv });
  //  return encrypted.toString();
 // }
  
  
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

  // Firebase code
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Check if user's email is verified
      if (firebase.auth().currentUser.emailVerified) {
        setSessionCookie("email", email); // Set the "email" session cookie
        sessionStorage.setItem("email", email); 
        window.location.href = "../bidding-officer-dashboard/bidding_officer_dashboard.html";
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

