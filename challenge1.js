// 1
var friendsNames = ["Madison", "Nate", "Rob", "Kara"] 
for(var i = 0; i < friendsNames.length; i++) {

if(friendsNames[i].length <= 4) {
    
    console.log(friendsNames[i])}
}
    
    
    
// // For this challenge I wanted to print only the names that have 4 characters or less.
// 1) I will be forming an array which allows me to store many pieces of data in one variable. 
// 2) The friendsNames variable stores an array of strings. 
// 3) To start I'm going to name my variable by typing, var friendsNames =, after that i'll type the array in [], and that will be where my array of 
// strings will live. 
// 4) Next I'll be using a for statement to tell print as much material as I command until the end point I've commanded. This will start with the word for
// then (var i =0; i < friendsNames.length; i++) this is declaring that the variable with print the array of names indefinitely
// 5) then by typing if(friendsNames[i].length <= 4) I can print just the names of friends with four letter names or less. by having the [i] placed within 
// the friendsNames.length it will narrow the command down to the i(item.)
// 6)now I want to make sure I have all of my curly brackets in the right places. the open curly bracket after the for will start the command. and the open 
// curly bracket after the if statment will start the next command. Then we will used two closed brackets after the console.log wich will close my code block. 
// 7) before I close my curly brackets I'll write my console log which will include the variable and the item I want it to print. Everything has been defined 
// above the console log so everything should print correctly.
// 2
const arr = ["PeArlJam", "REdhotcHilipepPErS","HoTIqS"]

const lower = arr.map(element => {
   return element.toLowerCase();
 });

 console.log(lower);

// 1) I'm going have an array of string values, and print every item in lower case letters.
// 2) I'll be forming each string with upper and lower cased letters.
// 3) I'm using the const variable to declare my variables
// 4) now I need to find a method to command my script to print lower cased letters
// 5) I'll be beginning with the map method which will iterate over the entire array. This is possible by typing const lower = arr.map(element =>)
// 6) I'm using the to `toLowerCase()` method to convert the array to lower cased letters.
// 7) typing return element.toLowerCase will call the string to return with the result of lower case letters
// 7) Then my cosnsole.log(lower) will call the code to print the letters in lower case. 
// 8) now I'm making sure my curly brackets are in the right place. I'm opening them after my map method so that my code block can contain how else
     // want to iterate my code with the lower case method.
     //9) I was able to print the lower case letters by using two array methods, the first one was to command that the whole array would print. The second 
    //  method was to make sure the array would print in lower case. And it worked!
const citiesToVisit = [`Chicago`, `Toronto`, `Athens`, `Tokyo`, `Tuscany`];

let startsWithT = countries.filter(function (city) {
  return country[0].toLowerCase() === 't';
});

console.log(startsWithT)
