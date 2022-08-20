window.addEventListener('scroll',function(){
    let menubar =document.getElementById("navbar");

    if(window.pageYOffset >=79){
        menubar.classList.add('sticky');
    }
    else{
        menubar.classList.remove('sticky');
    }
});