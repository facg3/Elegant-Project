function loginuser(data, cb) {
  fetch('/loginuser', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
    credentials: 'include',
  })
    .then((response) => {
      cb(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
