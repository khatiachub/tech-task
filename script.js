
let imageSlide=document.getElementById('imagediv');
let arLeft=document.getElementById('leftarrow');
let arRight=document.getElementById('rightarrow');
let current=document.getElementsByClassName('line');

let data =[
  {
    id:1,
    img:'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/cover-home-decor-trends-2021-13119-new.jpg'
  },
  {
    id:2,
    img:'http://prideventures.in/wp-content/uploads/2020/12/blog-post-interior.jpg'
  },
  {
    id:3,
    img:'https://www.neoshades.com/wp-content/uploads/2020/05/p3-gallery1.jpg'
  },
  {
    id:4,
    img:'https://i.pinimg.com/736x/bf/7b/fb/bf7bfbe73aa0e7699c6de815bba10ddd--apartment-living-rooms-kitchen-living-rooms.jpg'
  },
  {
    id:5,
    img:'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/09/16191216/Contemporary-Living-Room-Easy-Functionality.jpg'
  },
  {
    id:6,
    img:'https://www.empirehousesd.com/wp-content/uploads/2021/02/FEAT_ID.jpg'
  },
  {
    id:7,
    img:'http://images.summitmedia-digital.com/sap/images/2018/04/27/2018_0427_RL_Circulo_Verde_Main_Image.jpg'
  }
]

let indexElement=0;

function createImg(item){
  imageSlide.style.backgroundImage = 'url('+ item.img +')';
  imageSlide.classList.add('imgdiv');
}

function createH2(item){
  let h2Tag=document.createElement('h2');
  h2Tag.innerText=item.id;
  h2Tag.classList.add('none');
  return h2Tag;
}

function slider(){
  imageSlide.innerHTML='';
  createImg(data[indexElement]);
  let h2=createH2(data[indexElement]);
  imageSlide.appendChild(h2);
  let liness=createLines();
  imageSlide.appendChild(liness);
  currentLine();
}

function createLines(){
  let lines=document.createElement('div');
  lines.classList.add('lines');
  data.forEach((element)=>{
    let line=document.createElement('div');
    line.classList.add('line');
    line.setAttribute('data-id',element.id-1);
    line.onclick=function(event){
      let id = event.target.getAttribute('data-id');
      indexElement=id;
      slider();
    }
    lines.appendChild(line);
  })
  return lines;
};
function currentLine(){
  current[indexElement].classList.add('activeline');
}


function clickLeft() {
  if(indexElement<=0){
    indexElement=data.length-1;
    slider();
    return;
}
indexElement--;
slider();
}

function clickRight(){
  if(indexElement >= data.length - 1){
    indexElement=0;
    slider();
    return;
  }
  indexElement++;
  slider();
}

arLeft.addEventListener('click',clickLeft);
arRight.addEventListener('click',clickRight);

setInterval( () => {
  clickRight();
}, 3000)

slider();



