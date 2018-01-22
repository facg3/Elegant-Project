function fetchFunction(url, data, cb) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
    credentials: 'include',
  })
    .then((response) => {
      cb(null, response);
    })
    .catch((err) => {
      console.log(err);
    });
}
function burgerAction() {
  const div = document.getElementById('sidebar');
  const btn = document.getElementById('burgerButton');
  div.classList.toggle('active');
}

function btnClick(id, cb) {
  const elem = document.getElementById(id);
  elem.classList.remove('fa-heart-o');
  elem.classList.add('fa-heart');
  fetchFunction('/saved', JSON.stringify({ clothId: id }), (err, result) => {
    if (err) {
      alert('error in database');
    } else if (result.status === 401) {
      alert("The clothes didn't saved");
      window.location.pathname = '/login';
    } else {
      alert('saved done!');
    }
  });
}
