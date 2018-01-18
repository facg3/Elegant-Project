(() => {
    var div =  document.getElementById('sidebar');
    var btn = document.getElementById('burgerButton');
    btn.addEventListener('click',(event) =>{
      div.classList.toggle("active");
    });
})();
