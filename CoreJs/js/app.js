
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
