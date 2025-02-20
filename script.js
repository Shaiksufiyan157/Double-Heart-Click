const loveme=document.querySelector('.loveme')
const times=document.querySelector('#times')

let clicktime=0
let timesClick=0
loveme.addEventListener('click',(e)=>{
  if(clicktime===0){
    clicktime=new Date().getTime()
  }
  else{
    if((new Date().getTime()-clicktime)>800){
        createHeart(e);
        clicktime=0
    }
    else{
        clicktime=new Date().getTime()
    }
  }
})
const createHeart=(e)=>{
const heart=document.createElement('i')
heart.classList.add('fas')
heart.classList.add('fa-heart')

const x=e.clientX
const y=e.clientY

const leftOffset=e.target.offsetLeft;
const topOffset=e.target.offsetTop;


const Xinside=x-leftOffset;;
const Yinside=y-topOffset


heart.style.top=`${Yinside}px`;
heart.style.left=`${Xinside}px`;

loveme.appendChild(heart)

times.innerHTML= ++timesClick
setTimeout(()=>heart.remove(),1000)
}