'use strict';
// Variables

// let - design to change 
// const - design not to change
const  testString = 'this is a test';
const testNumber = 45.87;
const testBoolean = true;

//const testConst; // needs init value

 
//testString = 'this is a BETTER TEST';
console.log(testString + testString);

// HOISTING 
// var i; 
// i = 10;
// i = 5;
// console.log(i);

// var i = 2
// console.log(i);

// j = 10; 
// j = 5;

// console.log(j);

// let j = 2; 

// Working with Variables

let x = 1;
let y = 2;
let result = 5;

// result += x; 
// result++

// + = * / 

result *= 2;
result /= 4;
result -= 2


console.log(result);

let isAlive = true;

// isAlive = false
// isAlive = !isAlive

console.log(!isAlive);
console.log(isAlive);

let birthday = new Date(2001, 4, 28, 0, 0, 0, 0);
console.log(birthday.getMonth() + 2);


let firstName = 'Marc';
let lastName = 'Moxey';
let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Arrays


// Arrays 
const people = ['Tim', 'Sue', 'Mary', 'Bob']; 
people.push('Greg');
const lastPerson = people.pop();
console.log(people);
console.log(lastPerson);
console.log(people.indexOf('Bob'));
console.log(Array.isArray(lastPerson));
// console.log(lastPerson.startsWith('Greg'));
people.push('Tom');
people.push('Tammy');
people.push('Berry');

const coolPeople = people.filter(function(person) {
    return person.startsWith('T') 
    // Tim -> 'Tim'.startWith('T')
});
console.log(coolPeople);
console.log(people);


console.log(lastPerson.substr(0, 1));

const firstLetters = people.map(function(person) {
    return person.substring(0,1)
});
console.log(firstLetters);



// Conditionals
firstName = 'Marc';
const middleName = 'Guess';
lastName = 'Moxey';

if(firstName.toLowerCase() === 'marc' && lastName.toLowerCase() === 'moxey') {
    console.log('Hello teacher');
    
} else if (firstName.toLowerCase() == 'marc') {
    console.log('Hello other Marc');
    
} else if (lastName.toLowerCase() == 'moxey') {
    console.log('Cool last name');
    
} else {
    console.log(`Hello student`);
    
}


if((firstName.toLowerCase() === 'marc' || lastName.toLowerCase() === 'moxey') && middleName.toLowerCase() === 'guess') {
    console.log('Thats a pretty cool name');
    
}

// const x = '1'; 
// const y = 1; 

// if(x == y ) {  // value comparison
//     console.log('The two value are equal');
    
// }

const day = 'Tuesday'

switch (day.toLowerCase()) {
    case 'monday':
        console.log('Welcome to the first day of the week');
        break;
    case 'tuesday':
        console.log('I hope your week is going well');
        break;
        
    default:
        console.log('I dont know what what day of the week that is');
        break;
}


// Loops 
const group = ['Tim', 'Sue', 'Dan', 'Mary', 'Bob'];

// for(let i = 0; i < group.length; i++) {
//     console.log(group[i]);
    
// }

// for (const person of group) { 
//     // loop over each person in group 
//     // put it in person object
//     console.log(person);
    
// }

// group.forEach(function(person) {
//     console.log(person);
    
// })

while(group.length > 0) {
    console.log(group.pop());
    
}
console.log(group);

// Functions 
function add(x = 3, y = 6)  {
    return x + y;
}


console.log(add(9, 10));

console.log(add()); 


function greetUser() {
    console.log('Hello User');
    console.log('Welcome to our website');
    console.log('We hope you enjoy it');
        
    console.log(`The values of 5 + 3 = ${add(5,3)}`);
    
    
}

greetUser()


const subtract = (x, y) => {
    return x - y;
}

console.log(subtract(7,3));

// parameter declaration 'p' 
const filtered = people.filter(p => p.substring(0,1) === 'T')
console.log(filtered);



// objects 
const person =  {
    firstName: 'Marc',
    lastName: 'Moxey',
    age: 23,
    isAlive: true,
    // thisTest: this,
    // sub objects
    address: {
        city: 'NYC',
        state: 'NY',
    },
    fullName: function() {
        // console.log(this);
        
        return `${this.firstName} ${this.lastName}`;
    }
};

// function test() {
//     return this;
// }
// console.log(test());

// person.firstName = 'Marc-Anthony'
// person.address.country = 'USA'; // adding to object later
// console.log(person.fullName());
// //console.log(person);
// console.log(person.thisTest);

// function greetUser(p) {
//     console.log(p.fullName());
    
// }

// greetUser(person); 


// const { fName, age, address: {city} } = person;

// console.log(city)

// for(const prop in person) {
//     //console.log(`${prop} : ${person[prop]}`);
//     if(person.hasOwnProperty) {
//         console.log(`${prop} : ${person[prop]}`);
//     }
    
// }


// API - Application Programming Interface
// JSON - JavaScript Object Notation

//delete person.fullName; 

console.log(person.fullName());

//console.log(JSON.stringify(person)); // prepare to send to API

const receivedInfo = JSON.stringify(person); 
const parseInfo = JSON.parse(receivedInfo); // parse the JSON string to an object

console.log(parseInfo.firstName);
//console.log(parseInfo.fullName());


// CLasses 

// class - blueprint; class instance - house

class Person {

   #ssn = '';

    constructor(firstName, lastName) {
       this.firstName = firstName;
        this.lastName = lastName;
        
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }


    get social() {
        return `***-**-${this.#ssn.substr(this.#ssn.length - 4)}`;
    }

    set social(ssn) {
        this.#ssn = ssn;
    }
}

const person1 = new Person('Marc', 'Moxey');
const person2 = new Person('Sue', 'Storm'); // new instance 
console.log(person1.lastName);
console.log(person2.lastName);


person1.social = '123-45-6789';
console.log(person1.social);
console.log(person1.getFullName());

// IIFE  - Immediately Invoked Function Expression
// function greetUser() {
//     console.log('Welcome to our app');
    
// }

// (function(app) {

//     app.greetUser = function() { 

//         console.log('Welcome to our other app');
        
//     }


// })(window.otherApp = window.otherApp || {}); 

// const myName = 'Marc Moxey';
// (function(app, myName) {
//     app.myName = myName;
//     app.greetUser = function() {
//         console.log(`Hello ${myName}`);
//     }    
//     // using class in IIFE
//     app.Person = class {
//         constructor(firstName, lastName) {
//             this.firstName = firstName;
//             this.lastName = lastName;
//         }
//     }
// })(window.app = window.app || {}, myName); // IIFE; 


// console.log(window.app);

// greetUser();
// app.greetUser();
// const p = new app.Person('Marc', 'Moxey');  
// console.log(p.firstName);


// // attached to prev IIFE
// (function(app) {
//     app.sayGoodbye = function() {
//         console.log('Goodbye User');
        
//     }

// }(window.app = window.app || {})); // IIFE;

// app.sayGoodbye();

// otherApp.greetUser(); // different namespace 


// Scope 
// var a = 4;
// function testing() {
//     var a = 5;
//     console.log(`Inside testing(): ${a}`);
    
// }
// testing();
// console.log(`global: ${a}`);


const b = 4;

if(true) {
    let b = 5;
    console.log(b);
    
}

console.log(b);



// Use Strict 

// let myTest = 2;
// myTest = 3;

// let test = {};

// 'test'.myInfo = 'Hello';
// console.log('test'.myInfo);

// function add2(x,x) {
//     return x + x;
// }


// (function(app) {
//     'use strict';
// })();


// Best Practices 

/* 

1. Add 'use strict'; to the top of every file and IIFE 

2. Do not use var - use let ir const instead. Prefer const. 

3. Naming - use camelCase for variables, functions etc. and PascalCase for classes 

4. Use IIFE's whenever it makes sens 

5. Just because you can,  doesn't mean you should

6. Use a separate file for your JavaScript

7. Use semi-colons.

8. Don't Assume
*/
