
function ajax() {
    let requist=new XMLHttpRequest();
    requist.open('GET','https://api.npoint.io/44c1c313d40c0811ad19?fbclid=IwAR21mh5oykHpGcLcya3o6ahSVTfbfoa_KlHirKxeTwbH2eCEZvXh3d1QY_c');
    requist.addEventListener('load',function(){
        let data = JSON.parse(requist.responseText);
        data.forEach(element => {
            createPost(element)
        });
    });
    requist.send();
}
ajax();

function createPost(item){
    let box=document.getElementById('wraperbox');

    let wraper=document.createElement('div');
    wraper.classList.add('wraper');


    let title=document.createElement('h4');
    title.textContent=item.title
    title.classList.add('tittle')

    let id=document.createElement('h4');
    id.textContent=item.id
    id.style.display='none'

    let p=document.createElement('p');
    p.textContent='view post';
    p.classList.add('p');

    box.appendChild(wraper);
    wraper.appendChild(title);
    wraper.appendChild(id);
    wraper.appendChild(p);

    wraper.addEventListener('click',function(){
        document.getElementsByClassName('.overlay').innerHTML='';
        getPosts(item);
    })
}
function getPosts(item){
    let box=document.getElementById('wraperbox');

    let wraperBlock=document.createElement('div');
    wraperBlock.classList.add('overlay');

    let x=document.getElementById('x-button');
    wraperBlock.appendChild(x);
    x.classList.add('active');

    x.addEventListener('click',function(){
        wraperBlock.style.display='none'
    })

    let description=document.createElement('p');
    description.textContent=item.description;
    description.classList.add('descr')

    let title=document.createElement('h4');
    title.textContent=item.title
    title.classList.add('tittle')

    let h4=document.createElement('h4');
    h4.textContent=item.h4

    let img=document.createElement('img');
    img.src=item.image;
    img.classList.add('imagepost');

    let postdiv=document.createElement('div');
    postdiv.classList.add('postdiv');
    postdiv.appendChild(description)
    postdiv.appendChild(img)

    box.appendChild(wraperBlock);
    wraperBlock.appendChild(title);
    wraperBlock.appendChild(h4);
    wraperBlock.appendChild(postdiv)
}
