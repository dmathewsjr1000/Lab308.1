// Declaring my variables for Section 1 1A


const myName = 'Dennis Mathews Jr.';
let favoriteLang = 'Python';
let newfavoriteLang = 'Javascript';
favoriteLang = newfavoriteLang;

// Printing the message after manupalation of data

console.log('Hello my name is ' + myName + ' and my favorite language is ' + favoriteLang);

// Declaring Variables for 1B

let firstVar = 'Hello World';
firstVar = 5;
let secondVar = firstVar;
secondVar = 'Bye-Bye'

//  Printing the message after manupalation of data 

console.log(firstVar);

// Printing out a Greeting

const yourName = 'Dennis Mathews Jr.';
console.log('Hello, my name is ' + myName);

// Declaring variables for 1C

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

// Make Booleans print true

  console.log(a < b);
  console.log(c > d);
  console.log('Name' == 'Name'); 

  // FOR THE NEXT TWO, USE ONLY && OR ||
  
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false == false)
  console.log(e === 'Kevin');
  console.log(a && b !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a + a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

// Declaring variables for 1D

  const animal = 'cow';
  

// Testing the farm 

let animal1 = prompt('Enter an Animal: ');
    animal1 = animal1.toLowerCase();

    if (animal == animal1) {

        console.log("Mooooo get some milk!!!");
        
    }
    else {

        console.log("Hey! You're not a cow.");
    }

    // Declaring variables for 1E

let age = prompt('Enter your age: ');
    age = parseInt(age);

    if (age >= 16 && age < 69) {

        console.log("Here are the keys!");



        
    } else if (age >= 70) {

        console.log('You are too old turn in your Keys! ');

    } 
    else {
        

        console.log("Sorry, you're too young. ");


    }

    // Declaring variables for 3F

let num = prompt('Enter your number: ');
num = parseInt(num);

if (num < 100) {

    console.log("Little number: " + num);



    
} 
else {
    

    console.log("Big number: " + num);


}


// Declaring variables for 3G

let num1 = prompt('Enter your number: ');
num1 = parseInt(num1);

if (num1 < 5) {

    console.log("Little number: " + num1);



    
} 

else if (num1 > 5) {

    console.log("Big number: " + num1);

}
else {

    
    console.log("Middle number: " + num1 + " Monkey in the Middle.");    


}


