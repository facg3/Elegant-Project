const form = document.getElementById("registerForm");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var massage = document.getElementById("massage");
var checkbox = document.getElementById("chkOwner");
var shopname = document.getElementById("shopname");
var address = document.getElementById("address");

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!checkbox.checked) {
    validateUsernameEmailPassword();
  } else {
    validateUsernameEmailPassword();
    if (shopname.value.trim() === "" || address.value.trim() === "") {
      massage.textContent = "please fill all inputs";
    }
  }
});

function validateUsernameEmailPassword(cb) {
  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    password.value.trim() === ""
  ) {
    massage.textContent = "please fill all inputs";
  } else if (!validateEmail(email.value)) {
    massage.textContent =
      'please include an "@" in the email address and please match requested format ';
  } else if (!validatePassword(password.value)) {
    massage.textContent = "Please match requested format password feild";
  } else {
    var data;
    if (!checkbox.checked) {
      data = {
        username: username.value,
        password: password.value,
        email: email.value
      };
    } else {
      data = {
        username: username.value,
        password: password.value,
        email: email.value,
        shopname: shopname.value,
        address: address.value
      };
    }
    massage.textContent = "";
    fetchFunction("/signup", JSON.stringify(data), res => {
      if (res.status === 401) {
        massage.textContent = "username or email not available";
      } else {
        window.location.pathname = '/loginuser'
      }
    });
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
function validatePassword(password) {
  var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password);
}
function ShowHideDiv(chkOwner) {
  var divchkOwner = document.getElementById("divchkOwner");
  divchkOwner.style.display = chkOwner.checked ? "block" : "none";
}
