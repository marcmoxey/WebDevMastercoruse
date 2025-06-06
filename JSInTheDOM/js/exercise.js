// Selecting Elements 
const message = document.querySelector('#message');
message.textContent = 'Hello DOM!';


let box = document.getElementById('box');
box.style.backgroundColor = 'blue';

let list = document.getElementById('list');
let newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem);


let removeBtn = document.getElementById('removeBtn');
let text = document.getElementById('text');

removeBtn.addEventListener('click',function(){
    text.remove();
});


// Manipulating Elements
let newStyle = document.getElementById('newStyle');
newStyle.style.backgroundColor = 'yellow';
newStyle.style.fontSize = '4.5rem';

let inputText = document.getElementById('username');
inputText.value = 'Update Name';


let boldMsg = document.getElementById('someText');
boldMsg.innerHTML = '<strong>This is a strong tag</strong>'

let disappearText = document.getElementById('magic');
let magicBtn = document.getElementById('magicBtn'); 

magicBtn.addEventListener('click', function() {
    if(disappearText.style.display === 'none'){
        disappearText.style.display = 'block';
    } else {
        disappearText.style.display = 'none';
    }
});

const task = document.getElementById('task');
const newTask = document.createElement('li');
newTask.textContent = 'Task 2';
task.appendChild(newTask);



// Traversing Elements

// Get Parent Element
const child = document.querySelector('span');
const parent = child.parentElement;
console.log(parent);

// Access All Children
const fruitsList = document.getElementById('fruits');
const fruits = fruitsList.children;
console.log(fruits);

//Navigate to Next/Previous Sibling
const middle = document.getElementById('middle');
console.log(middle.nextElementSibling.textContent);
console.log(middle.previousElementSibling.textContent);

// Loop Through All Children
const color = document.getElementById('colors');
console.log(color.firstElementChild.textContent);
console.log(color.lastElementChild.textContent);


let cards = document.getElementById('cards');
let cardsChild = cards.children;

for(let i = 0; i < cardsChild.length; i++) {
    console.log(cardsChild[i].textContent);
    
}

// Creating html 

const imageUrls = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/250'
];

// const imgContainer = document.getElementById('image-container')
// const fragment = new DocumentFragment();
// imageUrls.forEach(url => {
//     const img = document.createElement('img');
//     img.src = url;
//     img.alt = 'Place holder';
//     fragment.appendChild(img)

// });

// imgContainer.appendChild(fragment);


const people = [
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
  ];

  const tbody = document.querySelector('#people-table tbody')
  console.log(tbody);
  const fragment = new DocumentFragment();
  people.forEach(person => {
    const row = document.createElement('tr');
    Object.values(person).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    })
    fragment.appendChild(row);
  })
  tbody.appendChild(fragment);



  const foods = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];

  
  const select = document.getElementById('food-dropdown'); 
  //console.log(select);
  const fragment1 = new DocumentFragment();
  foods.forEach(food => {
    const option = document.createElement('option');
    option.value = food;
    option.textContent = `${food}`;
    //console.log(option.textContent);
    
    fragment1.appendChild(option);
  });

  select.appendChild(fragment1);

  const links = [
    { text: 'Google', url: 'https://www.google.com' },
    { text: 'Facebook', url: 'https://www.facebook.com' },
    { text: 'Twitter', url: 'https://www.twitter.com' }
  ];
  
  const linkList = document.getElementById('link-list');
  const fragment2 = new DocumentFragment();
  
  links.forEach(link => {
    const li = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.href = link.url;
    anchor.text = link.text;
    anchor.target = '_blank'
    
    li.appendChild(anchor);
    fragment2.appendChild(li);
  });

  linkList.appendChild(fragment2);


  // Events

  const clickMeBtn = document.getElementById('clickMe');
  const counterText = document.getElementById('count')
  let counter = 0;

  function upCounter()
  {
      counter++;
      counterText.innerText  = counter;
  }

  clickMeBtn.addEventListener('click',upCounter);

  const newBox = document.getElementById('newBox'); 

  newBox.addEventListener('mouseover', () => {
    newBox.style.backgroundColor = 'green';
  });
  newBox.addEventListener('mouseout', () => {
    newBox.style.backgroundColor = 'lightgrey';
  });

  const keyName = document.getElementById('keyName');

document.addEventListener('keydown', (e) => {
    keyName.textContent = e.key
  });

  const textInput = document.getElementById('textInput');
  const clearBtn = document.getElementById('clearBtn')

  clearBtn.addEventListener('click', clearText);

  function clearText(){
    textInput.value = '';
  }

  let toggleBtn = document.getElementById('toggleBtn');
  toggleBtn.addEventListener('click', OnOff);

  function OnOff() {
    if (toggleBtn.textContent === 'Off')  {

      toggleBtn.textContent = 'On';

    } else if (toggleBtn.textContent === 'On') {
        toggleBtn.textContent = 'Off';
    }
  }


  // Timed Events

  setTimeout(() => {
    console.log('hello after 2 seconds');
    
  }, 2000);

const delayedBtn = document.getElementById('delayedBtn');

const delayedMsg = document.getElementById('delayedMsg');

delayedBtn.addEventListener('click',showMessage);

function showMessage() {
  setTimeout(() => {
    delayedMsg.innerText = 'this is a message';
  }, 3000);
}


const hideBtn = document.getElementById('hideBtn');
const textToHide = document.getElementById('textToHide'); 
let counterTilHidden = 5;

hideBtn.addEventListener('click', hideMessage);

function hideMessage() {
  setTimeout(() => {

    textToHide.style.display = 'none';
  }, 5000);
}

const bgBtn = document.getElementById('bgBtn');
const page = document.body; 
bgBtn.addEventListener('click', changeBackground);

function changeBackground(){
  setTimeout(() => {
    page.style.backgroundColor = 'orange';
  }, 2000);
}

const countDownTimer = document.getElementById('countdown');
let timer = 3;

function tick() {
  if(timer > 3) {
    counterText.textContent = timer;
    setTimeout(tick,1000)
  } else {
    countDownTimer.textContent = 'Go';
  }
}

tick();
