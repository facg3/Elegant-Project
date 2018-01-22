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

let save;
function btnClick(id, cb) {
  const elem = document.getElementById(id);
  const heart = elem.className;
  const p = document.getElementById('text');
  const modal = document.getElementById('myModal');
  const span = document.getElementById('close');

  if (heart === 'fa fa-heart-o') {
    save = true;
    elem.classList.remove('fa-heart-o');
    elem.classList.add('fa-heart');
    fetchFunction(
      '/saved',
      JSON.stringify({
        clothId: id,
      }),
      (err, result) => {
        if (err) {
          alert('error in database');
        } else if (result.status === 401) {
          alert("The clothes didn't saved");
          window.location.pathname = '/login';
        } else {
          p.textContent = 'Saved successed';
          modal.style.display = 'block';
          span.onclick = function () {
            modal.style.display = 'none';
            p.textContent = 'Unsaved successed';
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = 'none';
              p.textContent = 'Unsaved successed';
            }
          };
        }
      },
    );
  } else {
    save = false;
    elem.classList.remove('fa-heart');
    elem.classList.add('fa-heart-o');
    fetchFunction(
      '/unsaved',
      JSON.stringify({
        clothId: id,
      }),
      (err, result) => {
        if (err) {
          alert('error in database');
        } else if (result.status === 401) {
          alert("The clothes didn't unsaved");
          window.location.pathname = '/login';
        } else {
          p.textContent = 'Unsaved successed';
          modal.style.display = 'block';
          span.onclick = function () {
            modal.style.display = 'none';
            p.textContent = 'Saved successed';
          };

          window.onclick = function (event) {
            if (event.target == modal) {
              modal.style.display = 'none';
              p.textContent = 'Saved successed';
            }
          };
        }
      },
    );
  }
}
