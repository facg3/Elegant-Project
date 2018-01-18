function fetchFunction(url,data,cb) {
  fetch(url, {
   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: data,
   credentials: 'include'
 })
 .then((response) => {
    cb(response);
 })
 .catch( (err) => {
   console.log(err);
 });
}
function burgerAction() {
  var div =  document.getElementById('sidebar');
  var btn = document.getElementById('burgerButton');
  div.classList.toggle("active");
}
