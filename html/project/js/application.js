
let activatorNav = document.querySelector('#activator-nav');
let burgherNav = document.querySelector('#burgher-nav');

let navStart = document.querySelector('.nav-star');
let navEnd = document.querySelector('.nav-end');

let body = document.querySelector(".unlock");

activatorNav.addEventListener('click',function(){
    

    if(burgherNav.classList.contains('nav-start') ){
        burgherNav.classList.add('nav-end');
        if(burgherNav.classList.contains('nav-start')){
            burgherNav.classList.remove('nav-start')
            
        }
    }  else if (burgherNav.classList.contains('nav-end')){
        burgherNav.classList.add('nav-start');
        

        if(burgherNav.classList.contains('nav-end')){
            burgherNav.classList.remove('nav-end');
        }
    }
    else {
        burgherNav.classList.add('nav-start');
    }

})
