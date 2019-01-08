let activatorNav = document.querySelector('#activator-nav');
let burgherNav = document.querySelector('#burgher-nav');

activatorNav.addEventListener('click',function(){
    console.log("click");
    burgherNav.classList.toggle('transition');
})

