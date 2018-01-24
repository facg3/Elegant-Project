function fetchFunction(url, data, cb) {
  fetch(url, {

   method: 'POST',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: data,
   credentials: 'include'
 })
 .then((response) =>{
      return response.json();
 })
 .then((response) => {
    cb(null,response);
 })
 .catch( (err) => {
   cb(err)
 });

}

function burgerAction() {
  const div = document.getElementById('sidebar');
  const btn = document.getElementById('burgerButton');
  div.classList.toggle('active');
}

let save;
function btnClick(id) {
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
          p.textContent = 'Erorr in server';
          modal.style.display = 'block';
        } else if (result.status === 401) {
          p.textContent = 'Login first';
          modal.style.display = 'block';
          span.onclick = () => {
            modal.style.display = 'none';
            window.location.pathname = '/login';
          };
          window.onclick = (event) => {
            if (event.target == modal) {
              modal.style.display = 'none';
              window.location.pathname = '/login';
            }
          };
        } else {
          p.textContent = 'Saved successed';
          modal.style.display = 'block';
          span.onclick = () => {
            modal.style.display = 'none';
            p.textContent = 'Unsaved successed';
          };

          window.onclick = (event) => {
            if (event.target === modal) {
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
          p.textContent = 'Erorr in server';
          modal.style.display = 'block';
        } else if (result.status === 401) {
          p.textContent = "The clothes didn't un saved";
          modal.style.display = 'block';
        } else {
          p.textContent = 'Unsaved successed';
          modal.style.display = 'block';
          span.onclick = () => {
            modal.style.display = 'none';
            p.textContent = 'Saved successed';
          };

          window.onclick = (event) => {
            if (event.target === modal) {
              modal.style.display = 'none';
              p.textContent = 'Saved successed';
            }
          };
        }
      },
    );
  }
}

function savedpage(id) {
  const elem = document.getElementById(id);
  const heart = elem.className;
  const p = document.getElementById('text');
  const modal = document.getElementById('myModal');
  const span = document.getElementById('close');
  fetchFunction(
    '/unsaved',
    JSON.stringify({
      clothId: id,
    }),
    (err, result) => {
      if (err) {
        p.textContent = 'Erorr in server';
        modal.style.display = 'block';
      } else if (result.status === 401) {
        p.textContent = "The clothes didn't un saved";
        modal.style.display = 'block';
      } else {
        p.textContent = 'Unsaved successed';
        modal.style.display = 'block';
        span.onclick = () => {
          modal.style.display = 'none';
          window.location.reload();
        };

        window.onclick = (event) => {
          if (event.target === modal) {
            modal.style.display = 'none';
            window.location.reload();
          }
        };
      }
    },
  );
}

function blogArticleId(id){
  fetchFunction('/blogArtical',JSON.stringify({blogId : id}), (err,res)=>{
    if(err) console.log(err);
})
}

function btnClickLike(blogId) {
  const elem = document.querySelector('i');
  elem.classList.remove('fa-heart-o');
  elem.classList.add('fa-heart');
  fetchFunction(`/blogs/article/${blogId}`,null,(err,res)=>{
    if(err)console.log(err);
    else {
      console.log(res[0].likes);
      const likespan = document.getElementById('likespan');
      console.log(likespan);
      likespan.textContent = res[0].likes;
      }
    })
}
