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