# Projects Related to DOM

## 01_project
```javascript
const body=document.querySelector('body');

const buttons=document.querySelectorAll('.button');

buttons.forEach(function (button){
  button.addEventListener('click',(e)=>{
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id;
    };
  });
});
```
## 02_Project

```javascipt
    const form=document.querySelector('form')

form.addEventListener('click',(e)=>{
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value)
  
  const weight=parseInt(document.querySelector('#weight').value)

  const result=document.querySelector('#results')
  if(height==='' ||height<0 || isNaN(height)){
    result.innerHTML='Please give a valid Height'
  }
  else if(weight==='' ||weight<0 || isNaN(weight)){
    result.innerHTML='Please give a valid weight'
  }
  else {
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    result.innerHTML=`<span>${bmi}</span>`
  };
});
```
## 03_Project

```javascript
const clock=document.querySelector('#clock');

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```
## 04_Project
```javascript
let random= parseInt(Math.random()*100)+1;

const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const res=document.querySelector('.lastResult');
const loworhi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

let p=document.createElement('p');

let prevguess=[];
let numguess=1;
let playgame=true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    let guess= parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });
}
function validateguess(guess){
    if(isNaN(guess)){
      alert("please enter a valid num")
    }
    else if(guess<1){
      alert("please enter a valid num")
    }
    else if(guess>100){
      alert("please enter a valid num")
    }
    else{
      prevguess.push(guess);
      if(numguess===11){
        displayguess(guess);
        displaymessage(`game over, random num was ${random} `);
        endgame();
      }
      else{
        displayguess(guess);
        checkguess(guess);
      }
    }
}

function checkguess(guess){
    if(guess===random){
      displaymessage('you guessed it right');
      endgame();
    }
    else if(guess>random){
      displaymessage("num is too high")
    }
    else {
      displaymessage("num is too low");
    }
}
function displaymessage(message){
  loworhi.innerHTML=`<h2>${message}</h2>`
}
function displayguess(guess){
  userinput.value=''
  guessslot.innerHTML+=`${guess}, `
  numguess++;
  res.innerHTML=`${11-numguess}`
}
function newgame(){
    const gamebtn= document.querySelector('#newgame1')
    gamebtn.addEventListener("click",function(e){
      random=parseInt(Math.random()*100)+1;
      prevguess=[];
      numguess=1;
      guessslot.innerHTML='';
      res.innerHTML=`${11-numguess}`
      userinput.removeAttribute('disabled')
      startover.removeChild(p)
      displaymessage('')
      playgame=true;
    })
}
function endgame(){
  userinput.value='';
  userinput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML=`<h2 id='newgame1'> Start new Game</h2>`
  startover.appendChild(p);
  playgame=false;
  newgame();
}

```