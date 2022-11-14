

var cities = ["Chicago", "Toronto", "Athens", "Tokyo", "Tuscany"] 
for (var i = 0; i < cities.length; i++) {
       if (cities[i].startsWith("T")){
        console.log(cities[i])
       }
         }
        
// 1. I'm going to give an array of strings and return only the words that start with T
//2. Now I'm going to form a for statement. To do this I'm going to start
// by naming my variable-- var cities =
// 3. My items are all written with quotes around each and separated by commas and closed in square brackets
// 4 Now i'm going to start a new line and start my for statement. For then the parentheses will hold the condition.
// 5. In the parenthesis will be var i = 0; < cities.length; i++ this. the i represents the index number the 0 indicates
// that the array will print from the first item in the array and the cities.length means that the whole array will print.
//6. Then after we've closed that parenthesis we will open curly brackets and start our console.log and open () that will tell us which 
// cities to print .
// 7. cities[i] indicates we want a specific item in our array .startsWith() is the method we'll use to grab speciffic items ("t") will pull the
// items starting with T.
//8. After running this it ran with no errors but it printed false false false false false so i think this happened because I will probably have to
// have an if statement 
//9. So now i've capatilized the T and added an if satement after the curly bracket that followed the for statement. 
//10. type if then open parenthesis cities then closed bracket i representing ietm then add the startsWith method capitol T in parenthesis and quotes 
// close the parenthesis then close the if with the closing parenthesis.
//11. open curly bracket console. log open parenthesis cities[i]close parenthesis. this will allow the terminal to print the cities pertaining to my if statement
// 12 then i'll close the consol log with a curly bracket and close the last curly bracket to close the code block and now the terminal has printed
// Toronto
// Tokyo
//Tuscany        
