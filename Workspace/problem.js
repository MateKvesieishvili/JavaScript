//! დავალების შესასრულებლად, გუგლი და AI გამოვიყენე, ძალიან რთული იყო
const APP = {
    init() {
      APP.addListeners();
    },
    addListeners() {
      let form = document.forms.sampleForm;
      let fullname = document.getElementById("fullname");
      let email = document.getElementById("email");
      let pass = document.getElementById("pass");
      let cell = document.getElementById("cell");
  
      fullname.addEventListener("input", APP.testName);
      email.addEventListener("input", APP.testEmail);
      pass.addEventListener("input", APP.checkPasswordRequirements);
      cell.addEventListener("input", APP.formatPhone);
  
      email.addEventListener("invalid", APP.fail);
      pass.addEventListener("invalid", APP.fail);
      cell.addEventListener("invalid", APP.fail);
  
      form.addEventListener("submit", APP.validate);
    },
    validate(ev) {
      ev.preventDefault();
      let form = ev.target;
  
      let fullname = document.getElementById("fullname");
      let email = document.getElementById("email");
      let pass = document.getElementById("pass");
      let cell = document.getElementById("cell");
  
      // Check validity for each field
      let isFullnameValid = fullname.checkValidity();
      let isEmailValid = email.checkValidity();
      let isPasswordValid = pass.checkValidity();
      let isCellValid = cell.checkValidity();
  
      if (!isFullnameValid || !isEmailValid || !isPasswordValid || !isCellValid) {
        // Handle validation errors
        if (!isFullnameValid) {
          fullname.setCustomValidity("Full name must be 'John' or 'Jane'.");
          fullname.reportValidity();
        }
  
        if (!isEmailValid) {
          let emReg = new RegExp("@gmail.com$", "i");
          if (emReg.test(email.value) === false) {
            email.setCustomValidity("Email must be a valid Gmail address.");
            email.reportValidity();
          }
        }
  
        if (!isPasswordValid) {
          pass.setCustomValidity("Password must meet the requirements.");
          pass.reportValidity();
        }
  
        if (!isCellValid) {
          cell.setCustomValidity("Cellphone must be a valid Georgian number starting with +995.");
          cell.reportValidity();
        }
      } else {
        // All fields are valid, submit the form
        form.submit();
      }
    },
    testName(ev) {
      let fullname = ev.target;
      fullname.setCustomValidity(""); // Clear old message
  
      let validNames = ["John", "Jane"];
      if (!validNames.includes(fullname.value)) {
        fullname.setCustomValidity("Full name must be 'John' or 'Jane'.");
        fullname.reportValidity();
      }
    },
    testEmail(ev) {
      let email = ev.target;
      email.setCustomValidity(""); // Clear old message
  
      let emReg = new RegExp("@gmail.com$", "i");
      if (!emReg.test(email.value)) {
        email.setCustomValidity("Email must be a valid Gmail address.");
        email.reportValidity();
      }
    },
    formatPhone(ev) {
      let cell = ev.target;
      cell.setCustomValidity(""); // Clear old message
  
      let geReg = new RegExp("^\\+995[\\d]{9}$");
      if (!geReg.test(cell.value)) {
        cell.setCustomValidity("Cellphone must be a valid Georgian number starting with +995.");
        cell.reportValidity();
      }
    },
    checkPasswordRequirements(input) {
      let pass = input.target;
      pass.setCustomValidity(""); // Clear old message
  
      let requirements = [
        /[A-Z]/, // Uppercase
        /[a-z]/, // Lowercase
        /[0-9]/, // Numeric
        /^.{10,}$/ // Length >= 10
      ];
  
      let isValid = requirements.every((regex) => regex.test(pass.value));
      if (!isValid) {
        pass.setCustomValidity("Password must meet the requirements.");
        pass.reportValidity();
      }
    },
    fail(ev) {
      let field = ev.target;
      field.setCustomValidity(""); // Clear old message
  
      switch (field.id) {
        case "fullname":
          field.setCustomValidity("Full name must be 'John' or 'Jane'.");
          break;
        case "email":
          field.setCustomValidity("Email must be a valid Gmail address.");
          break;
        case "pass":
          field.setCustomValidity("Password must meet the requirements.");
          break;
        case "cell":
          field.setCustomValidity("Cellphone must be a valid Georgian number starting with +995.");
          break;
      }
  
      field.reportValidity();
    },
  };
  
  document.addEventListener("DOMContentLoaded", APP.init);
  