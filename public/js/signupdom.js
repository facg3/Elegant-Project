const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const massage = document.getElementById('massage');
const checkbox = document.getElementById('chkOwner');
const shopname = document.getElementById('shopname');
const address = document.getElementById('address');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!checkbox.checked) {
    validateUsernameEmailPassword();
  } else {
    validateUsernameEmailPassword();
    if (shopname.value.trim() === '' || address.value.trim() === '') {
      massage.textContent = 'please fill all inputs';
    }
  }
});

function validateUsernameEmailPassword(cb) {
  if (
    username.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value.trim() === ''
  ) {
    massage.textContent = 'please fill all inputs';
  } else if (!validateEmail(email.value)) {
    massage.textContent =
      'please include an "@" in the email address and please match requested format ';
  } else if (!validatePassword(password.value)) {
    massage.textContent =
      'The password have to contains at least one capital letter , small letter and number';
  } else {
    let data;
    if (!checkbox.checked) {
      data = {
        username: username.value,
        password: password.value,
        email: email.value,
      };
    } else {
      data = {
        username: username.value,
        password: password.value,
        email: email.value,
        shopname: shopname.value,
        address: address.value,
      };
    }
    massage.textContent = '';
    fetchFunction('/signupuser', JSON.stringify(data), (err, res) => {
      if (res.status === 401) {
        massage.textContent = 'username or email not available';
      } else {
        window.location.pathname = '/login';
      }
    });
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
function validatePassword(password) {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return re.test(password);
}
function ShowHideDiv(chkOwner) {
  const divchkOwner = document.getElementById('divchkOwner');
  divchkOwner.style.display = chkOwner.checked ? 'block' : 'none';
}
