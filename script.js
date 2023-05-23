const myMail = document.getElementById("email");
const btn = document.getElementById("check-btn");
const text = document.getElementById("text");
const warning = document.getElementById("warning");

function checkValidation() {
  if (
    myMail.value.includes("@") === false ||
    myMail.value.includes(".") === false
  ) {
    text.innerHTML = "Please provide a valid email.";
    myMail.style.borderColor = " tomato";
    warning.style.display = "block";
    return;
  }
  if (
    myMail.value.length - myMail.value.indexOf(".") - 1 != 2 &&
    myMail.value.length - myMail.value.indexOf(".") - 1 != 3
  ) {
    text.innerHTML = "Invalid Extension.";
  } else {
    text.innerHTML = "Valid E-mail.";
  }
}

btn.addEventListener("click", checkValidation);
