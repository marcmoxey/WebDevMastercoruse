
const message = document.querySelector('#message');
message.textContent = 'Hello DOM!';


let box = document.getElementById('box');
box.style.backgroundColor = 'blue';

let list = document.getElementById('list');
let newItem = document.createElement('li');
newItem.textContent = 'New Item';
list.appendChild(newItem);

