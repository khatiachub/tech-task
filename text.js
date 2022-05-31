let service=document.getElementById('service');
let form=document.getElementById('form-id')
let closeform=document.getElementById('close-id');
let closebutt=document.getElementById('close-button');
let button=document.getElementById('button-id');
let formWraper=document.getElementById('wraper-block');


service.addEventListener('click', function(){
  form.classList.add('block'); 
});
closeform.addEventListener('click',function(){
    form.classList.remove('block');
});
closebutt.addEventListener('click',function(){
    form.classList.remove('block');
});


function servicePost(item){
  let wraperblock=document.createElement('div');
  wraperblock.classList.add('wraperblock');

  let serviceDiv=document.createElement('div');
  serviceDiv.classList.add('service-div');


  let h4Tag=document.createElement('h4');
  h4Tag.innerText=item.title;
  h4Tag.classList.add('servicetitle');

  let pTag=document.createElement('p');
  pTag.innerText=item.description;
  pTag.classList.add('servicedescr');


  let imgTag=document.createElement('img');
  imgTag.innerText=item.img;

  let buttonDel=document.createElement('button');
  buttonDel.type='button';
  buttonDel.classList.add('deleteposts');
  buttonDel.textContent='delete post';
  buttonDel.classList.add('deletebutton')

  let deleteBut=document.createElement('div');
  deleteBut.classList.add('wrapp');
  
  serviceDiv.appendChild(h4Tag);
  serviceDiv.appendChild(pTag);
  wraperblock.appendChild(serviceDiv);
  wraperblock.appendChild(imgTag);
  deleteBut.appendChild(wraperblock);
  deleteBut.appendChild(buttonDel);
  formWraper.appendChild(deleteBut);
  

  buttonDel.addEventListener('click',function(){
    wraperblock.style.display='none';
    buttonDel.style.display='none';
  }
  )};
let wrap=document.getElementById('wraper');
let delbutt=document.getElementById('del-button');
delbutt.addEventListener('click',function(){
  wrap.style.display='none';
  delbutt.style.display='none';
});

let wrap2=document.getElementById('wraper2');
let delbutt2=document.getElementById('del-button2');
delbutt2.addEventListener('click',function(){
  wrap2.style.display='none';
  delbutt2.style.display='none';
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let errors={};
  let form=event.target;
  let data = {
    title:event.target[0].value,
    description:event.target[1].value,
    img:event.target[2].value,
  }
  servicePost(data);
  if(data.title==''){
    errors.title='title must not be empty';
    
  }else if(data.title.length>25){
    errors.title='max-length of the title 25 symbols';
  }

  if(data.description==''){
    errors.text='description must not be empty';
    
  }else if(data.description.length>100){
    errors.text='max-length of the description 100 symbols';
  }
  
  let files =data.img;
    if (files.length > 0) {
        let imgType = files.type;
        let imgSize = files.size;

        let maxFileSizeMb = 1000 * 1024;
        let supportedFileTypes = ['image/png', 'image/jpg'];

        if(!supportedFileTypes.includes(imgType)){
            errors.avatar = 'Please select only jpg or png file';
        }

        if (imgSize > maxFileSizeMb) {
            errors.avatar = 'Please select image size less than 1 mb';
        }
    }else{
        errors.avatar = 'Please select image';
    }
    

  form.querySelectorAll('.errorspan').forEach(item=>{
    item.innerHTML='';
});
  for(let item in errors){
    let errorTitle=document.getElementById('error-'+item);
    if(errorTitle){
      errorTitle.textContent=errors[item];
      errorTitle.style.color='red'
    }
  }

  });


  




