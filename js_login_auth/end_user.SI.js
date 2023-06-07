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
  
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Check if user's email is verified
        if (firebase.auth().currentUser.emailVerified) {
          //const randomString = generateRandomString(10); // generate random string
          //const encodedHash = encryptString(randomString);
          setSessionCookie("email", email); // Set the "email" session cookie
          sessionStorage.setItem("email", email); 
          window.location.href = ("../end-user-dashboard/all_successful_pr.html");
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
        window.location.assign('../login_pages/enduser.html')
    })
    .catch(error => {
        console.error(error);
    })
}