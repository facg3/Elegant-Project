function showLikes(id,cb) {
  fetch('/numberlike', {
   method: 'GET',
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({blogId : id}),
   credentials: 'include'
 })
 .then((response)=>{
   console.log('asdasdasd',response);
   cb(null,response);
 })
 .catch((err) => {
   console.log(err);
 })
};
