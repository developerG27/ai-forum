document.addEventListener("DOMContentLoaded", function () {

   //nav aside
   let activatorNav = document.querySelector('#activator-nav');
   let burgherNav = document.querySelector('#burgher-nav');
   let body = document.body;
   let bar1 = document.querySelector('.bar-1');
   let bar3 = document.querySelector('.bar-3');

   activatorNav.addEventListener('click', function () {


      if (burgherNav.classList.contains('nav-start')) {
         // activatorNav.style.transform = "rotate(0deg)";
         
         burgherNav.classList.add('nav-end');
         bar1.style.width = "70%";
         bar3.style.width = "50%";
         if (burgherNav.classList.contains('nav-start')) {
            burgherNav.classList.remove('nav-start')

         }
      } else if (burgherNav.classList.contains('nav-end')) {
         // activatorNav.style.transform = "rotate(10deg)";
         burgherNav.classList.add('nav-start');
         bar1.style.width= "100%";
         bar3.style.width = "100%";

         if (burgherNav.classList.contains('nav-end')) {
            burgherNav.classList.remove('nav-end');
         }
      } else {
         burgherNav.classList.add('nav-start');
         bar1.style.width= "100%";
         bar3.style.width = "100%";
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


   //Secondary menu
   let activatorSecondaryMenu = document.querySelector('#activator-secondary-menu');
   let secondaryMenu = document.querySelector('#secondary-menu')
   activatorSecondaryMenu.addEventListener('click', function () {
      secondaryMenu.classList.toggle('block');
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