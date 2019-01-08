document.addEventListener("DOMContentLoaded", function () {
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

})