// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCTfHsVheiXlcx0wDDaRFEHmSYDQaYTbcw",
    authDomain: "pr-officer.firebaseapp.com",
    projectId: "pr-officer",
    storageBucket: "pr-officer.appspot.com",
    messagingSenderId: "232782185994",
    appId: "1:232782185994:web:f2d8db279429123db541f3",
    measurementId: "G-H0YP6H73Q1"
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
          window.location.href = ("../pr-office-dashboard/pr_officer_dashboard.html");
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
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out from this account?!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '<i class="fas fa-trash-alt"></i> Yes, delete it!',
      cancelButtonText: 'No, cancel',
      confirmButtonHtml: true
    }).then((result) => {
      if (result.isConfirmed) {
        auth.signOut()
        // logout logic here
        // Clear session storage when logging out or when the user is logged out
      sessionStorage.removeItem("email");
      window.location.assign('../login_pages/profficer.html')
        Swal.fire('Success!', 'Logged Out Successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        //Swal.fire('Cancelled', 'Your file is safe :)', 'error');
      }
    });
   // auth.signOut()
   // .then(() => {
      // Clear session storage when logging out or when the user is logged out
   //   sessionStorage.removeItem("email");
   //   window.location.assign('../login_pages/profficer.html')
   // })
  //  .catch(error => {
   //     console.error(error);
 //   })
}
  
