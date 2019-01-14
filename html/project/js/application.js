document.addEventListener("DOMContentLoaded", function () {
   
   //nav aside
   let activatorNav = document.querySelector('#activator-nav');
   let burgherNav = document.querySelector('#burgher-nav');
   let body = document.body;
   let bar1 = document.querySelector('.bar-1');
   let bar3 = document.querySelector('.bar-3');

   activatorNav.addEventListener('click', function () {
      burgherNav.classList.toggle('show');
      body.classList.toggle('lock');

      if (burgherNav.classList.contains('show')) {
         bar1.style.width= "100%";
         bar3.style.width = "100%";
      } else {
         bar1.style.width = "70%";
         bar3.style.width = "50%";
      } 
   })

   //Checkbox
   let inputName = document.querySelector('.input-name');
   let inputEmail = document.querySelector('.input-email');
   let pName = document.querySelector('.p-name');
   let pEmail = document.querySelector('.p-email');


   inputName.addEventListener('focus', function () {
      pName.classList.add('up');
   })

   inputEmail.addEventListener('focus', function () {
      pEmail.classList.add('up');
   })

   inputName.addEventListener('blur', function () {
      pName.classList.remove('up');
      if (inputName.value.length > 0) {
         pName.classList.add('up');
      }
   })

   inputEmail.addEventListener('blur', function () {
      pEmail.classList.remove('up');

      if (inputEmail.value.length > 0) {
         pEmail.classList.add('up');
      }
   })

   inputName.addEventListener('keypress',function(){
      pName.classList.add('up');
   })

   inputEmail.addEventListener('keypress',function(){
      pEmail.classList.add('up');
   })

   //Secondary menu
   let activatorSecondaryMenu = document.querySelector('#activator-secondary-menu');
   let secondaryMenu = document.querySelector('#secondary-menu')
   activatorSecondaryMenu.addEventListener('click', function () {
      secondaryMenu.classList.toggle('visibile');
   })

   //Funzione che calcola la lunghezza dell'elemento per dargli la stessa altezza
   function perfectSquare() {
      var square = document.getElementsByClassName('square');
      
      for (var i = 0; i < square.length; i++) {
         let perfectSquare = square[i].offsetWidth;
         square[i].style.height = perfectSquare + "px";
      }
   }
   perfectSquare();

   //Funzione che ricarica la pagina ad ogni resize
   window.onresize = function() {
      location.reload();
   }

   //Cambia il testo del button nell header
   if(body.offsetWidth < 425){
      let changeText = document.querySelector('#changeText');
      changeText.textContent = "Contattaci";
   }
})

$(document).ready(function () {
   $('input').iCheck({
       checkboxClass: 'icheckbox_square-blue',
       radioClass: 'iradio_square-blue',
   });
});


$(document).ready(function(){
   $(".owl-carousel").owlCarousel();
 });