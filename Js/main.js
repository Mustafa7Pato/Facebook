let firstNameLabel = document.querySelector(".firstNameLabel");
let firstName = document.querySelector(".firstName");
let lastNameLabel = document.querySelector(".lastNameLabel");
let lastName = document.querySelector(".lastName");
let emailLabel = document.querySelector(".emailLabel");
let email = document.querySelector(".email");
let phoneNumberLabel = document.querySelector(".phoneNumberLabel");
let phoneNumber = document.querySelector(".phoneNumber");
let passwordLabel = document.querySelector(".passwordLabel");
let password = document.querySelector(".password");
let confirmPasswordLabel = document.querySelector(".confirmPasswordLabel");
let confirmPassword = document.querySelector(".confirmPassword");
let genderLabel = document.querySelector(".genderLabel");
let maleLabel = document.querySelector(".maleLabel");
let male = document.querySelector("#male");
let femaleLabel = document.querySelector(".femaleLabel");
let female = document.querySelector("#female");
let dateLabel = document.querySelector(".dateLabel");
let date = document.querySelector(".date");
//=====================
let mobileReg =
  /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
//=====================s
function myValid() {
  firstNameLabel.innerHTML = "First Name :";
  lastNameLabel.innerHTML = "last Name :";
  emailLabel.innerHTML = "Email :";
  phoneNumberLabel.innerHTML = "Phone Number :";
  passwordLabel.innerHTML = "Password :";
  confirmPasswordLabel.innerHTML = "Confirm Password :";
  genderLabel.innerHTML = "Gender :";
  dateLabel.innerHTML = "Birthrates :";
  firstNameLabel.classList.remove("red");
  lastNameLabel.classList.remove("red");
  emailLabel.classList.remove("red");
  phoneNumberLabel.classList.remove("red");
  passwordLabel.classList.remove("red");
  confirmPasswordLabel.classList.remove("red");
  genderLabel.classList.remove("red");
  dateLabel.classList.remove("red");
}
//=====================
function secondPara(f) {
  f.innerHTML = `Invalid ${f.innerHTML}`;
}
function color(n) {
  n.classList.add("red");
}
//=====================
function validation(i) {
  if (
    firstName.value === "" ||
    !isNaN(firstName.value) ||
    firstName.value.includes(" ")
  ) {
    myValid();
    color(firstNameLabel);
    secondPara(firstNameLabel);
    return false;
  } else if (
    lastName.value === "" ||
    !isNaN(lastName.value) ||
    lastName.value.includes(" ")
  ) {
    myValid();
    secondPara(lastNameLabel);
    color(lastNameLabel);
    return false;
  } else if (
    email.value === "" ||
    email.value.includes(" ") ||
    !reg.test(email.value)
  ) {
    myValid();
    secondPara(emailLabel);
    color(emailLabel);
    return false;
  } else if (
    phoneNumber.value === "" ||
    phoneNumber.value.includes(" ") ||
    !mobileReg.test(phoneNumber.value)
  ) {
    myValid();
    secondPara(phoneNumberLabel);
    color(phoneNumberLabel);
    return false;
  } else if (
    password.value === "" ||
    password.value.includes(" ") ||
    !isNaN(password.value) ||
    password.value.length < 6
  ) {
    myValid();
    secondPara(passwordLabel);
    color(passwordLabel);
    return false;
  } else if (
    confirmPassword.value === "" ||
    confirmPassword.value.includes(" ") ||
    !isNaN(confirmPassword.value) ||
    confirmPassword.value !== password.value
  ) {
    myValid();
    secondPara(confirmPasswordLabel);
    color(confirmPasswordLabel);
    return false;
  } else if (female.checked !== true && male.checked !== true) {
    myValid();
    secondPara(genderLabel);
    color(genderLabel);
    return false;
  } else if (date.autoComplete !== "on") {
    myValid();
    secondPara(dateLabel);
    color(dateLabel);
    date.autoComplete = "on";
    return false;
  } else {
    return true;
  }
}
