// burger

let burger=document.querySelector('.burgerdiv');
let nav=document.getElementById('navigation');
burger.addEventListener('click',function(){
    nav.classList.toggle('d-block');
    burger.classList.toggle('active');
})