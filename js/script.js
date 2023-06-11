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
  




//kontakt fomular

const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
  input.addEventListener("focus", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      
      formHeading.style.opacity = "1";

      if(input.placeholder === `Email` || input.placeholder === 'Besked') { //|| = eller også kaldes for pipe
        formHeading.textContent = `Din ${input.placeholder}`;
      }
      else{
        formHeading.textContent = `Dit ${input.placeholder}`;
      }
    }, 300);
  });

  input.addEventListener("blur", () => {
    formHeading.style.opacity = "0";
    setTimeout(() => {
      formHeading.textContent = "Las os snakke";
      formHeading.style.opacity = "1";
    }, 300);
  });
});