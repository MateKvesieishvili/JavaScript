const loginForm = document.querySelector('.register_form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('usernameInput').value;
  const passwordInput = document.getElementById('passwordInput').value;

  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (storedUsername && storedPassword) {
    if (storedUsername === usernameInput && storedPassword === passwordInput) {
      window.location.href = 'products.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  } else {
    alert('No user found. Please register an account.');
  }
});

var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
var passwordInput = document.getElementById("passwordInput");

showPasswordCheckbox.addEventListener("change", function() {
  passwordInput.type = this.checked ? "text" : "password";
});

document.addEventListener('DOMContentLoaded', function() {
  if (isUserLoggedIn()) {
    const loggedInUsername = getLoggedInUsername();

    const userInfoUsername = document.querySelector('.userInfo_username');

    userInfoUsername.textContent = loggedInUsername;
  }
});

function isUserLoggedIn() {
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  return storedUsername && storedPassword;
}

function getLoggedInUsername() {
  const storedUsername = localStorage.getItem('username');
  return storedUsername ? storedUsername : '';
}
