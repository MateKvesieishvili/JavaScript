const registerForm = document.querySelector('.register_form');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const usernameInput = document.getElementById('usernameInput').value;
  const passwordInput = document.getElementById('passwordInput').value;

  if (isUsernameTaken(usernameInput)) {
    alert('Username is already taken. Please choose a different username.');
    return;
  }

  if (!isPasswordValid(passwordInput)) {
    alert('Password should be between 8 and 20 characters long and include at least one lowercase letter, one uppercase letter, and one symbol.');
    return;
  }

  let userType;
  if (document.getElementById('buyerRadio').checked) {
    userType = 'Buyer';
  } else (document.getElementById('sellerRadio').checked); {
    userType = 'Seller';
  };

  localStorage.setItem('username', usernameInput);
  localStorage.setItem('password', passwordInput);
  localStorage.setItem('userType', userType);

  window.location.href = 'login.html';
});

function isUsernameTaken(username) {
  const storedUsername = localStorage.getItem('username');
  return storedUsername === username;
}

function isPasswordValid(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
  return passwordRegex.test(password);
}

var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
var passwordInput = document.getElementById("passwordInput");

showPasswordCheckbox.addEventListener("change", function() {
  passwordInput.type = this.checked ? "text" : "password";
});

const buyerRadio = document.getElementById('buyerRadio');
const sellerRadio = document.getElementById('sellerRadio');
const buyerLabel = document.getElementById('buyerLabel');
const sellerLabel = document.getElementById('sellerLabel');

buyerRadio.addEventListener('change', function() {
  if (buyerRadio.checked) {
    buyerLabel.style.backgroundColor = '#003049';
    buyerLabel.style.color = '#fff';
    sellerLabel.style.backgroundColor = '#fff';
    sellerLabel.style.color = '#003049';
  }
});

sellerRadio.addEventListener('change', function() {
  if (sellerRadio.checked) {
    buyerLabel.style.backgroundColor = '#fff';
    buyerLabel.style.color = '#003049';
    sellerLabel.style.backgroundColor = '#003049';
    sellerLabel.style.color = '#fff';
  }
});

var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
var passwordInput = document.getElementById("passwordInput");

showPasswordCheckbox.addEventListener("change", function() {
  passwordInput.type = this.checked ? "text" : "password";
});
