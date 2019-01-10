document.addEventListener("DOMContentLoaded", function () {

   //nav aside
   let activatorNav = document.querySelector('#activator-nav');
   let burgherNav = document.querySelector('#burgher-nav');

   let body = document.body;

   activatorNav.addEventListener('click', function () {

      if (burgherNav.classList.contains('nav-start')) {
         burgherNav.classList.add('nav-end');
         if (burgherNav.classList.contains('nav-start')) {
            burgherNav.classList.remove('nav-start')

         }
      } else if (burgherNav.classList.contains('nav-end')) {
         burgherNav.classList.add('nav-start');

         if (burgherNav.classList.contains('nav-end')) {
            burgherNav.classList.remove('nav-end');
         }
      } else {
         burgherNav.classList.add('nav-start');
      }

      body.classList.toggle('lock');
   })


   //Checkbox
   let inputName = document.querySelector('.input-name');
   let inputEmail = document.querySelector('.input-email');
   let pName = document.querySelector('.p-name');
   let pEmail = document.querySelector('.p-email');


   inputName.addEventListener('click', function () {
      pName.classList.add('up');
   })

   inputEmail.addEventListener('click', function () {
      pEmail.classList.add('up');
   })

   inputName.addEventListener('mouseout', function () {
      pName.classList.remove('up');
      if (inputName.value.length > 0) {
         pName.classList.add('up');
      }
   })

   inputEmail.addEventListener('mouseout', function () {
      pEmail.classList.remove('up');

      if (inputEmail.value.length > 0) {
         pEmail.classList.add('up');
      }
   })

   //Contacts

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
})