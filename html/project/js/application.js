let activatorNav = document.querySelector('#activator-nav');
let burgherNav = document.querySelector('#burgher-nav');

let navStart = document.querySelector('.nav-star');
let navEnd = document.querySelector('.nav-end');

activatorNav.addEventListener('click',function(){

    if(burgherNav.classList.contains('nav-start') ){
        burgherNav.classList.add('nav-end');
        console.log("non ho")
    }  else {
        burgherNav.classList.add('nav-start');
        console.log("ho")
    }


})
