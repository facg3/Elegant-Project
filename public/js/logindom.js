const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const p = document.createElement('p');
const paragraph = document.getElementById('paragraph');
function login() {
  if (username.value.trim() === '' || password.value.trim() === '') {
    p.textContent = 'Enter username and password please!';
    paragraph.appendChild(p);
  } else {
    const data = {
      username: username.value.trim(),
      password: password.value.trim(),
    };
    loginuser(JSON.stringify(data), (response) => {
      if (response.status === 200) {
        window.location.pathname = '/';
      } else {
        p.textContent = '* username or password is false';
        p.className = 'p';
        paragraph.appendChild(p);
      }
    });
    p.textContent = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  login();
});
