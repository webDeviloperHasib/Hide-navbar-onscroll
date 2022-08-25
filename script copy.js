let navigation = document.getElementById('navigation');

let prevScroll = window.pageYOffset;

window.onscroll = function(){
    let currentScroll = window.pageYOffset;
    if(prevScroll > currentScroll){
        navigation.style.top = '0'
    }else{
        navigation.style.top = '-50px'
    }
    prevScroll = currentScroll
}