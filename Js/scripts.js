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


// Section 2

// Declaring Variables
// Printing out 0-10
for (let a = 0; a <= 10; a++) {
    console.log(a);
    
}

// Declaring Variables B
// Printing  out 10-400
for (let b = 0; b <= 400; b++) {
    console.log(b);
    
}


// Declaring Variables B
// Printing  out every third  number from 12-4000
for (let c = 12; c <= 4000; c += 3) {
    console.log(c);
    
} 

// Declaring Variables C
// Printing  out every even  number from 1-100
for (let d = 0; d <= 100; d++) {
    if (d % 2 !== 0){
    console.log(d);
    }
    else {
        console.log(d + " is an even number");
    }


}

// Declaring Variables D
// Printing  out every third and fifth number from 1-100
for (let e = 0; e <= 100; e++) {
    if (e % 3 == 0 && e % 5 == 0) {
    console.log('I found a '+ e + '. Thrid and fifth Wheel!');
    }
    else if (e % 3 == 0) {
        console.log('I found a '+ e + '. Three is a crowd!');

    }
    else if ( e % 5 == 0) {
        console.log('I found a '+ e + '. High Five!');
    }


}

// Declaring Variables E
// Banking Account

let interest = 0;
let bankacct = 0
let bankacct1 = 0;
let z = 0;

while (z < 100) {

    interest++;
    bankacct = bankacct + interest ;
    z++;
    bankacct1 = bankacct * 2;
    
}
console.log(bankacct);
console.log(bankacct1);


// Arrays Section Section 3A

// What are the things in an array called?
//  Elements
// Do Arrays guarantee those things will be in order?
//  No
// What real-life thing could you model with an array?
// Table or list 
// Section 3B Declaring Variables

const quotes = ['Early bird catches the worm','Give a man a fish he will eat for a day, Teach a man to fish and he eat for life.','Always be ready so you never have to get ready.'];


// Section 3C

// Declaring Variables

const randomThings = [1, 10, "Hello", true];

// Accessing 1st Element
console.log(randomThings); 
console.log(randomThings[0]); 

// Changing data
randomThings[2] = 'World';
console.log(randomThings[2]); 
console.log(randomThings);
// const removeThings = randomThings.splice(2, 1, 'Hello World');
// console.log(removeThings);
// console.log(randomThings);

// Section 3D

// Declaring Variables

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

// Accessing 3rd Element
console.log(ourClass); 
console.log(ourClass[2]);

// Adding and removing data

const removeThings1 = ourClass.splice(4, 1, 'Octocat','Cloud City');
// ourClass.push('Cloud City'); also adds at the end of array
console.log(removeThings1);
console.log(ourClass);

// Section 3E

// Declaring Variables
const myArray = [5, 10, 500, 20];

// Adding to end of the array

myArray.push('Aegon','Dragonfire');
console.log(myArray);

// Removing from the front
myArray.shift();
console.log(myArray);
// Adding to the front 
myArray.unshift('Bob Marley');
console.log(myArray);

// Removing any string from any where

const removeThings2 = myArray.splice(4,1);
console.log(removeThings2);
console.log(myArray);

// Reversing Arrays

myArray.reverse();
console.log(myArray);
// Yes reverse the method mutates the array
// A change in the original code or data.
// Yes a reference to same array 

// Section 3H
// Declaring Variables
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];


// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// let warobe = kristynsCloset.join('');
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
let addThings = kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = 'stained knit hat';
console.log(5);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

console.log(thomsCloset[0][0]);
// In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0]);
// Access one item from Thom's accessories array.
console.log(thomsCloset[2][0]);
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
 console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][1]  + ".");
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset[1][2]);

// Section 5 Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// Declaring Object 5A
// A. Make a user object Create an object called user. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
const user = {
    name: 'Junior',
    email: 'JMccarter@gmail.com',
    age: 25,
    purchased: [],
};
// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = 'JMccarter07108@gmail.com';
// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
let nAge = 0;
nAge++;
user.age = user.age + nAge;
console.log(user.age);
// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
user.location = '';
console.log(user);

// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = 'NJ';
// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push('carbohydrates');
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "" to the purchased array.
user.purchased.push('peace of mind');
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push('Merino jodhpurs');
console.log(user.purchased);
// Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);
// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friend with a name and age, we could write:

 user.friend = {
     name: "Grace Hopper",
     age: 85,
     location: 'MD',
     purchased: []
};
// When we console.log user, we would see the friend object added to our user object.

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
console.log(user.friend.name);

// Console.log just the friend's location
console.log(user.friend.location);
// CHANGE the friend's age to 55
user.friend.age = 55;
// The friend has purchased "The One Ring". Use ``.push()to add "The One Ring" to the friend'spurchased` array.
user.friend.purchased.push('The One Ring');
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push('A latte');
// Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);
// F. Loops
// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (const key in user.purchased) {
    console.log(user.purchased[key]);
}
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (const key in user.friend.purchased) {
    console.log(user.friend.purchased[key]);
}