"use strict";
const form = document.querySelector(".main__form");
const emailInput = document.getElementById("mail");
const emailError = document.querySelector(".error");

function showError() {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Please provide a valid email address";
  } else if (emailInput.validity.typeMismatch) {
    emailError.textContent = "Value needs to be an email address";
  }
  emailError.className = "error active";
  document.querySelector(".error-icon").style.display = "inline";
}

function clearError() {
  emailError.textContent = "";
  emailError.className = "error";
  document.querySelector(".error-icon").style.display = "none";
}

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
    document.querySelector(".error-icon").style.display = "none";
  } else {
    showError();
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

document.body.addEventListener("click", function (event) {
  if (event) {
    clearError();
  }
});
