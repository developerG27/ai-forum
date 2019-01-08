let activatorNav = document.querySelector('#activator-nav');
let burgherNav = document.querySelector('#burgher-nav');

let navStart = document.querySelector('.nav-star');
let navEnd = document.querySelector('.nav-end');

activatorNav.addEventListener('click',function(){

    burgherNav.classList.add('nav-start');

    function showMenu(){
        for(var i = 0; i < 2; i++){
            if(burgherNav.classList.contains('nav-start')){
                console.log("dentro");
            }
        }
    }
    showMenu();

})
