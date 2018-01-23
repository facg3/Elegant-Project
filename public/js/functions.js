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
  var div =  document.getElementById('sidebar');
  var btn = document.getElementById('burgerButton');
  div.classList.toggle("active");
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
