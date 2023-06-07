// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-SggiVtO6yJPXvZKV7GiaJmT3UDePC7g",
    authDomain: "agrishoppers-2b297.firebaseapp.com",
    projectId: "agrishoppers-2b297",
    storageBucket: "agrishoppers-2b297.appspot.com",
    messagingSenderId: "143756117873",
    appId: "1:143756117873:web:00f64e164777754bb998d0",
    measurementId: "G-TMST7R1Z2B"
});

const auth = firebase.auth();


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





