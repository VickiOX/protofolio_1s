window.onload = function (){

    const menu_btn = document.querySelector('.hamburger');
    const mobil_menu = document.querySelector('.mobil-nav');
  
    menu_btn.addEventListener('click', function () {
  
    menu_btn.classList.toggle('is-active');
    mobil_menu.classList.toggle('is-active');
  
  });
  
  }
  
  window.onscroll = function() {myFunction()};
  
  // Get the header
  var container = document.getElementById("myHeader");
  
  // Get the offset position of the navbar
  var sticky = container.offsetTop;
  
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
  if (window.pageYOffset > sticky) {
    container.classList.add("sticky");
  } else {
    container.classList.remove("sticky");
  }
  }
  