// Variables 

// Declare and log variables 
const name = "Marc";
let age = 23;
let city = "NYC";

console.log(name);
console.log(age);
console.log(city);


// Change variables values
let favColor = "purple";
console.log(favColor);
favColor = "black";
console.log(favColor);

// Use 'const' and 'let;
const country = "USA"; 
//country = "UK"; 

let hobby = "gaming";
hobby = "tuning Cars";


// Combine variables 
let firstName = "Marc";
let lastName = "Moxey";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Swap values
let a = 5;
let b = 10;

let temp = a; 
console.log(temp);

a = b; 
console.log(a);

b = temp;
console.log(5);

// Working with variables
let num1 = 9;
let num2 = 10;
let sum = num1 + num2;
console.log(sum);

let greetings = 'Hello'; 
let name1 = 'Marc'; 
let message = `${greetings} ${name1}`;
console.log(message);


let length = 10;
let width = 5;
let area = length * width
console.log(`The area is: ${area}`);

let counter = 0; 
counter++
counter++ 
counter++
console.log(counter); 

let firstFruit = 'Apple';
let secondFruit = 'Banana';

let temp1 = firstFruit;
console.log(temp1);

firstFruit = secondFruit;
console.log(firstFruit);
secondFruit = temp1
console.log(secondFruit);

// Arrays
const fruits = ['apple', 'orange', 'grapes', 'mangos'];
console.log(fruits);
console.log(fruits[0]);


fruits[1] = 'berries'; 
console.log(fruits);


let colors = []; 
colors.push('Red');
colors.push('Blue');
colors.push('Green'); 
console.log(colors);
colors.pop()
console.log(colors);

let numbers = [1,2,3,4,5];

const double = numbers.map(function(number) {
    return number * 2
});

console.log(double);

let word = 'JavaScript';

console.log(word.substring(0, 3)); 

let words = ['hello', 'world', 'javascript']

let capWord = words.map(function(word){
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase()
})

console.log(capWord);
const names = ['Jonathan', 'Samantha', 'Alex', 'Christina'];


const threeLetters = names.map(function(name) {
     return name.substring(0,3)
});

console.log(threeLetters);

let nums = [1,4,7,10,13,16]

let evenNums = nums.filter(function(num){
    return num % 2 == 0
});

console.log(evenNums);

const animals = ['cat', 'elephant', 'dog', 'giraffe', 'ant']

let threeLetterAnimals = animals.filter(function(animal){
    return animal.length === 3
});

console.log(threeLetterAnimals);



// Conditionals 
let num = 3; 

if(num >= 1) {
    console.log('Positive number');
    
} else if (num < 0) {
    console.log('Negative Number');
    
} else if (num === 0) {
    console.log('Zero');
    
}

let score = 59; 

if (score >= 90) {
    console.log('A');
} else if (score >= 80 && score <= 89) {
    console.log('B');
    
} else if(score >= 70 && score <= 79) {
    console.log('C');
    
} else if(score >= 60 && score <= 69) {
    console.log('D');
} else {
    console.log('F');
    
}


let number = 27; 

if(number % 2 == 0) {
    console.log('Even number');
    
} else {
    console.log('Odd number');
}


let day = 5;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Taco Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log(' Thursday');
        break;
    case 5:
        console.log('Its Friday!');
        break;
    case 6:
        console.log('Saturday');
       break;
    case  7:
        console.log('Sunday');
    default:
        console.log('Invalid day');
        break;
}


let userRole = 'editor'

if(userRole.toLowerCase() === 'admin') {
    console.log('Access granted: Full control');
    
} else if (userRole.toLowerCase() == 'editor') {
    console.log('Access granted: Edit rights');
    
} else if(userRole.toLowerCase() === 'viewer') {
    console.log('Access granted: Read-only');
    
} else {
    console.log('Access denied');
    
}


//  Loops 
let i = 0; 

while(i < 10) {
    console.log(i++);
    
}


let n = 100; 

for (let i = 1; i < n; i++) {
    console.log(i + n);
    
}

let favColors = ['red', 'blue', 'green', 'yellow'];

for(let i = 0; i < favColors.length; i++) {
    console.log(favColors[i]);
    
}

let person = { name: 'Alice', age: 25, city: 'New York'};

for(p in person) {
    console.log(p + ': ' + person[p]);
    
}

let wrd = 'hello'; 
let reverseWord = "";

for(let i = wrd.length - 1; i >= 0; i--) {
   reverseWord += wrd[i]
}

console.log(reverseWord);


// Functions 
function greetUser(name) {
    console.log(`Hello ${name}`);
    
}

greetUser('Marc');

function calculateDiscount(price, discount = .10) {
        let offPrice = price * discount;
        return price - offPrice
}

console.log(calculateDiscount(55.72));
console.log(calculateDiscount(75,.30));



const add = (x,y) =>  {
    return x + y
}

console.log(add(21,4));


const multiply = (x,y ) => {
   let output =  x * y
   return output
}


console.log(multiply(5,5));


function isEven(number) {
    if(number % 2 == 0) {
        return true
    } else {
        return false
    }
}


console.log(isEven(3));


// objects

const book = {
    title: 'Cat in the Hat',
    author: 'Dr. Seuss',
    yearPublished: 1957,

};

console.log(book.title);

book.yearPublished = 1958;
console.log(book.yearPublished);
book.genre = 'childrens literature';
console.log(book.genre);


// const receivedInfo = JSON.stringify(book);
// const parsedInfo = JSON.parse(receivedInfo);
// console.log(parsedInfo.author);

const laptop = {
    brand: 'Apple',
    model: 'M1 MacBook Air',
    year: 2021

};

for (const info in laptop) {
    console.log(`${info}: ${laptop[info]}`);
}

const mathOperations = { 

    multiply: function(x,y){
        return x * y;
    },
    divide: function(x,y){
        if(y == 0) {
            return 'Cannot divide by zero';
        } else {
            return x / y;
        }
       
    }
};

console.log(mathOperations.multiply(5,5));
console.log(mathOperations.divide(10,0));
console.log(mathOperations.divide(10,2));

const movies = [ 

     movie = {
        title: 'Inception',
        director: 'Christopher Nolan',
        year: 2010
    }, 
    movie = {
        title: 'The Matrix',
        director: 'The Wachowskis',
        year: 1999
    },
    movie = {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        year: 2014
    }
];

for (const movie of movies) { 

     console.log(`${movie.title} (${movie.year}) directed by ${movie.director}`);
     
}


// Classes 

class Person {
    firstName = '';
    lastName = '';

    #age = '';

    set Age(age) { 
        this.#age = age;
    }

    get Age() {
        return this.#age;
    }
     

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

const person1 = new Person(); 
person1.firstName = 'Marc';
person1.lastName = 'Moxey';
console.log(person1.getFullName());

person1.Age = 23;
console.log(person1.Age);


class Car {
    make = '';
    model = '';
    year = '';

   getCarInfo() {
        return `${this.make} ${this.model} (${this.year})`;
    }
}

const car1 = new Car(); 
car1.make = 'Toyota';
car1.model = 'GR86';
car1.year = 2023;
console.log(car1.getCarInfo());

class MathHelper {
    static add(x,y) {
        return x + y;
    }
}

const result = MathHelper.add(5,10);
console.log(result);

class Employee extends Person {
    jobTitle = '';

    getFullName() {
        return `${this.firstName} ${this.lastName} (${this.jobTitle})`;
    }
}

const employee1 = new Employee(); 
employee1.firstName = 'Marc';
employee1.lastName = 'Moxey';
employee1.jobTitle = 'Software Engineer';
console.log(employee1.getFullName());