let email = document.getElementById("email");
let password = document.getElementById("password");
let user_name = document.getElementById("user_name");
let login_btn = document.querySelector(".login_btn");

login_btn.addEventListener("click", registerData);

function registerData() {
  if (user_name.value.length == 0) {
    showAlert("please Enter User Name");
  } 
  else if (email.value.length == 0) {
    showAlert("please Enter Email");
  } 
  else if (password.value.length == 0) {
    showAlert("please Enter Password");
  } 
  else {
    loadData(email.value, password.value, user_name.value);
  }
}

function showAlert(message) {
  const alertDiv = document.createElement('div');
  alertDiv.className = 'custom-alert'; // Apply the custom CSS class
  alertDiv.textContent = message;

  // Add the alert to the page (e.g., inside a specific container)
  document.body.appendChild(alertDiv);

  // Remove the alert after a certain time (optional)
  setTimeout(() => {
    document.body.removeChild(alertDiv);
  }, 3000); // Remove after 3 seconds (adjust as needed)
}

async function loadData(email, password, username){
  let obj = {
    email: email,
    password: password,
    username: username,
  };

  console.log(obj);
  localStorage.setItem("id-details", JSON.stringify(obj));
  alert("Registration Successfull!");
  window.location.href = "login.html";
}

document.querySelector('.hamburger').addEventListener('click', function() {
  var navbarLinks = document.querySelectorAll('.navbar a');
  navbarLinks.forEach(function(link) {
      link.style.display = (link.style.display === 'block') ? 'none' : 'block';
  });
});