# Projects Related to DOM

## 01_project - Color changer

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
## 02_Project - BMI Generator

```javascript
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
## 03_Project - Digital Clock

```javascript
const clock=document.querySelector('#clock');

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```
## 04_Project - Guess the Number
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

## 05_Project - KeyBoard Check

```javascript
const insert=document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`<div class="color">
  <table>
  <tr>
  <th>key</th>
  <th>code</th>
  <th>keyCode</th>
  </tr>
  <tr>
  <td>${e.key===' '?'Space':e.key}</td>
  <td>${ e.code }</td>
  <td>${e.keyCode}</td>
  </tr>

  </table>
  </div>`
})

```

## 06_Project - Unilimited colors

```javascript
const st=document.querySelector('#start')
const end=document.querySelector('#stop')

let intervalid=null

st.addEventListener('click',function(e){
  intervalid=setInterval(function(){
    const body=document.querySelector('body')
    var randomColor =getcolor();
    console.log(randomColor)
    body.style.backgroundColor=randomColor;
  },1000)
})
function getcolor(){
  var letter='0123456789ABCDEF'
  let color='#'
  for(var i=0;i<6;i++){
    color+=letter[Math.floor(Math.random()*16)]
  }
  return color;
}
end.addEventListener('click',function(e){
  clearInterval(intervalid)
  const body=document.querySelector('body')
  body.style.backgroundColor='black';
})
```

## 08_Project - Your Typer Library
```javascript
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex=0;
let letterIndex=0;
let interval;

function type() {
  let currentWord=words[wordIndex];
  let currentLetter = currentWord[letterIndex]

  typedTextSpan.innerHTML+=currentLetter
  letterIndex++;

  if(letterIndex>=currentWord.length){
    clearInterval(interval)

    setTimeout(()=>{
      interval=setInterval(erase,300)
    },200)
  }

}



function erase() {
  let currentWord=words[wordIndex];


  let text = currentWord.substring(0,letterIndex-1)
  typedTextSpan.innerHTML=text
  letterIndex--;

  if(text===''){
    clearInterval(interval)
  if(wordIndex==(words.length-1)){
    wordIndex=0
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  else{
    wordIndex++;
    letterIndex=0;
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  }
}
interval=setInterval(type,300)
setInterval(function(){
 
if(cursor.classList.contains("show")){
  cursor.classList.remove("show")
}
else{
  cursor.classList.add("show")
}
},500)
```
## 09_Project - Mouse Circle

```javascript
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
function update(e){
  cursor.style.left = e.clientX+"px"
  cursor.style.top = e.clientY+"px"

  let index = Math.floor(Math.random()*colors.length)
  console.log(index)
  cursor.style.backgroundColor=colors[index]
}
window.addEventListener("mousemove",update)
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array
```

## 10_Project - Emoji

```javascript
const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

btn.addEventListener('mouseover',(e)=>{
  let index=Math.floor(Math.random()*emojis.length)
  btn.innerHTML=emojis[index]
})

```

## 11_Project - Text Editor

```javascript
const input=document.getElementById('input-field')
const output=document.getElementById('output-field')
const btns=document.querySelectorAll('.btn')

btns.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    
    if(btn.classList.contains("uppercase")){
      output.innerHTML=input.value.toUpperCase();
    }
    else if(btn.classList.contains("lowercase")){
      output.innerHTML=input.value.toLowerCase();
    }
    else if(btn.classList.contains("capitalize")){
      output.innerHTML=tocapt(input.value);
    }
    else if(btn.classList.contains("bold")){
      output.style.fontWeight='bold';
      output.innerHTML=input.value;
    }
    else if(btn.classList.contains("italic")){
      output.style.fontStyle='italic';
      output.innerHTML=input.value;
    }
    
    else if(btn.classList.contains("underline")){
      output.style.textDecoration='underline';
      output.innerHTML=input.value;
    }
    input.value='';
  })
})
function tocapt(sentence){
    const splitarr=sentence.split(' ');
    const convet=splitarr.map((word)=>{
      return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    })
    return sen=convet.join(" ");
}
```
## 15_Project - TO DO List

```javascript
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault()
  //work on CRUD operation of DOM
  if(title.value===''||year.value===''||author.value===''){
    alert("please fill allField");
  }
  else{
    const section=document.createElement("section");
    bookList.appendChild(section);
    section.innerHTML=`
    <div>${title.value}</div>
    <div>${author.value}</div>
    <div>${year.value}</div>
    `
  }
  title.value="";
    author.value="";
    year.value="";
});

```
