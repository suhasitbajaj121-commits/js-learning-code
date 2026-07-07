//let name= "suhasit"
//let age=58
//console.log(name+age) // old method of concate
//let firstName = "Suhasit" //this is the old way of declaring the string
//let lastName = "Bajaj"
//console.log(`My Name is ${firstName} ${lastName}`) // `` knwon as string interpulation this is the backlits ${} this is the placeholder which is used to declare the variable and concate the variables

let name = new String("Suhasit-Bajaj") //new is the keyword that will create the object of the String. this provide the key value pair of the string means 0 key : S value, like this every character in the string has key which can be access using [] and entering the key inside it
//console.log(name) // output = [String : 'Suhasit] print string as object
//console.log(name[0]) //use to access character of string at 0 place
//console.log(typeof name) //here string is an object, and this object has some prototype
//console.log(name.__proto__) //prototype of string , this shows that string is object and prototype syntax
//String Method to know the string methods enter the let name = new String("Suhasit") in console it will show the string methods this methods is accessble using . 
//console.log(name.toUpperCase()) // () these are the function in the string methods
//console.log(name.toLowerCase())
//console.log(name.length)
//console.log(name.charAt(2)) // this show character at 2nd position
///console.log(name.indexOf('u')) // this show what is the index value of u
console.log(name.substring(2,4))// do not accept negative value and always ignore the last number print 4 character but 0 to 3 index character
console.log(name.slice(0,5))//accept negative value and always ignore the last number print 4 character but 0 to 3 index character
//console.log(name.trim()) //remove the space from the string 
//console.log(name.replace("S","A"))//replace the value or the character
//console.log(name.includes("q")) //show wether the value is present or not
//console.log(name.split("-"))// split the string according to the given conditions
//console.log(name.charCodeAt(4)) // this represent the code of the character access the character using the index numbber
//console.log(name.endsWith("Bajaj"))// shows wether the string ends with the define word or character output true and false
