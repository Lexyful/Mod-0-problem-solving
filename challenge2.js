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