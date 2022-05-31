// burger

let burger=document.querySelector('.burgerdiv');
let nav=document.getElementById('navigation')
// let burgerdiv=document.querySelectorAll('.burger');
burger.addEventListener('click',function(){
    nav.classList.toggle('d-block');
    burger.classList.toggle('active');
})