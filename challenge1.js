// 1
var friendsNames = ["Madison", "Nate", "Rob", "Kara"] 
for(var i = 0; i < friendsNames.length; i++) {

if(friendsNames[i].length <= 4) {
    
    console.log(friendsNames[i])}
}
    
    
    
// // For this challenge I wanted to print only the names that had 4 letters or less so by placing i in my for statement it will specifically grab one itetem when i call at the end. By placing the i in my conditional in the friends.length it will specifically grab the length of the item rather than the lenth of the array. 
// 2
const arr = ["PeArlJam", "REdhotcHilipepPErS","HoTIqS"]

const lower = arr.map(element => {
   return element.toLowerCase();
 });

 console.log(lower);
// In this array I wasn't sure how I wanted to name my array. I have to say I gave this one up to the google gods and researched how to convert all array elements to lower case. I used the `map()` method which returns the array in lower case form.  

