const container = document.querySelector(".container"),
  login_btn = document.querySelector("#login_btn"),
  email = document.querySelector("#email"),
  psswrd = document.querySelector("#password");

login_btn.addEventListener("click", loginData);

function loginData() {
  let e = email.value;
  let p = psswrd.value;

  if (e.length == 0) {
    showAlert("Please Enter UserName or Email");
  } else if (p.length == 0) {
    showAlert("Please Enter Password");
  } else {
    loadData(e, p);
  }
}

async function loadData(e, p) {
  var result = JSON.parse(localStorage.getItem("id-details"));
  if ((e == result.email || e == result.username) && (p == result.password)) {
    showAlert("Login Successfull!");
    window.location.href = "../HTML/home.html";
    email.value = "";
    psswrd.value = "";
  } else {
    showAlert("No Account Found! Sign In Again !!");
    email.value = "";
    psswrd.value = "";
  }
}

function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert'; // Apply the custom CSS class
    alertDiv.textContent = message;

    // Add the alert to the container
    document.body.appendChild(alertDiv);

    // Remove the alert after a certain time (optional)
    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 1000); // Remove after 1 seconds (adjust as needed)
  }