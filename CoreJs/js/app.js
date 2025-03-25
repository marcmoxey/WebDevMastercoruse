
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

