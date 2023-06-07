// Generate a random string of length n
const generateRandomString = (n) => {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < n; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


// Function to retrieve the value of a cookie
function getCookieValue(name) {
  var value = "";
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      value = cookie.substring(name.length + 1);
      break;
    }
  }

  return decodeURIComponent(value);
}

// Retrieve the session cookie on the redirected page
const email = sessionStorage.getItem("email");
const emails = getCookieValue("email");

if (!email || !emails) {
  // Email not stored, redirect to login page
  window.location.href = "../index.html";
} else {
  // Email stored, display it on the webpage
  // alert('Welcome: ' + email);
}

//const Add_Update = (event) => {
  //event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");

  //if (!email) {
    // Email not stored, redirect to login page
    //window.location.href = "../login_pages/biddingofficer.html";
    //alert('Authentication Error! Please Login');
  //} else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
   // window.location.href = `../bidding-officer-dashboard/update_bidding.html?email=${email}&randomString=${randomString}`;
 // }
//}

const Bidding_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/biddingofficer.html";
    //alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../bidding-officer-dashboard/bidding_officer_dashboard.html`;
  }
}

const Bidding_Schedule = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  //const email = sessionStorage.getItem("email");
  const email = getCookieValue("email");

  if (!email) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/biddingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../bidding-officer-dashboard/bidding_schedule.html`;
  }
}

const For_Bidding = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/biddingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);
    
    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../bidding-officer-dashboard/for_bidding.html`;
  }
}

const Canvass_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/canvassingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../canvassing-officer-dashboard/canvassing_officer_dashboard.html`;
  }
}

const For_Canvassing = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/canvassingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../canvassing-officer-dashboard/for_canvassing.html`;
  }
}

const Add_Canvassed = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/canvassingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href = `../canvassing-officer-dashboard/add_canvassing.html`;
  }
}

const Checking_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/checkingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../checking-officer-dashboard/checking_officer_successful_pr.html`;
  }
}

const Failed_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/checkingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../checking-officer-dashboard/checking_officer_unsuccessful_pr.html`;
  }
}

const Add_PR_Status = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/checkingofficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../checking-officer-dashboard/add_pr_status.html`;
  }
}

const PR_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/profficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../pr-office-dashboard/pr_officer_dashboard.html`;
  }
}

const PR_Unsuccessful = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/profficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../pr-office-dashboard/unsuccessful_pr.html`;
  }
}

const Add_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/profficer.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../pr-office-dashboard/add_pr.html`;
  }
}

const Office_Head_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_successful_pr.html`;
  }
}

const Add_Staff = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/add_staff.html`;
  }
}

const All_Complete_Pr = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_complete_pr.html`;
  }
}

const All_Incomplete_Pr = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_incomplete_pr.html`;
  }
}

const All_For_Canvassing = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_for_canvassing.html`;
  }
}

const All_Canvassed = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
  //  alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_canvassed.html`;
  }
}

const All_Bidding_Schedule = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_bidding_schedule.html`;
  }
}

const All_Bidding_Successful = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_biddings_successful.html`;
  }
}

const All_For_Bidding = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
  //  alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_for_bidding.html`;
  }
}

const All_Successful_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_successful_pr.html`;
  }
}

const All_Unsuccessful_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../office-head-dashboard/all_unsuccessful_pr.html`;
  }
}

const Bac_Staff = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/bidding-officer-signup.html`;
  }
}

const Pre_Bidding = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/pr-officer-signup.html`;
  }
}

const Post_Bidding = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/checking-officer-signup.html`;
  }
}

const Canvasser = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/canvassing-officer-signup.html`;
  }
}

const Company_Supplier = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/officehead.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/company-supplier-signup.html`;
  }
}

const End_User = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../sign-up_pages/end-user-signup.html`;
  }
}

const End_User_Dashboard = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_successful_pr.html`;
  }
}

const End_User_All_Complete_Pr = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_complete_pr.html`;
  }
}

const End_User_All_Incomplete_Pr = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_incomplete_pr.html`;
  }
}

const End_User_All_For_Canvassing = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_for_canvassing.html`;
  }
}

const End_User_All_Canvassed = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_canvassed.html`;
  }
}

const End_User_All_Bidding_Schedule = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_bidding_schedule.html`;
  }
}

const End_User_All_Bidding_Successful = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_biddings_successful.html`;
  }
}

const End_User_All_For_Bidding = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_for_bidding.html`;
  }
}

const End_User_All_Successful_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_successful_pr.html`;
  }
}

const End_User_All_Unsuccessful_PR = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/enduser.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../end-user-dashboard/all_unsuccessful_pr.html`;
  }
}

const Company_Supplier_All_Successful = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/company_supplier.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../company-supplier-dashboard/all_successful_pr.html`;
  }
}

const Company_Supplier_All_Unsuccessful = (event) => {
  event.preventDefault(); // prevent the link from immediately redirecting

  // Retrieve hashed email from URL
  //const urlParams = new URLSearchParams(window.location.search);
  //const email = urlParams.get("email");
  const email = sessionStorage.getItem("email");
  const emails = getCookieValue("email");

  if (!email || !emails) {
    // Email not stored, redirect to login page
    window.location.href = "../login_pages/company_supplier.html";
   // alert('Authentication Error! Please Login');
  } else {
    // Email stored, display it on the webpage
    //alert('Welcome: ' + email);

    // Generate a random string and redirect to third page
    //const randomString = generateRandomString(10);
    window.location.href=`../company-supplier-dashboard/all_unsuccessful_pr.html`;
  }
}

// Retrieve email from cookie
//var urlParams = new URLSearchParams(window.location.search);
//var email = urlParams.get("email");
//var emailDiv = document.getElementById("email");

//if (!email) {
  // Email not stored, redirect to login page
 // alert('Email Not Present')

//} else {
  // Email stored, display it on the webpage
  
 // alert('Email: ' + email);
//}

