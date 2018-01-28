const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function send() {
  const data = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value,
  };
  console.log(data);
  fetch('/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include',
  })
    .then((response) => {
      console.log(res);
      cb(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  send();
});
