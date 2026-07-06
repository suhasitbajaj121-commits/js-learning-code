//let age = 26
//console.log(typeof age)
//let age1 = new Number(2623.123) // new keyword here we are creating the object of Number
//console.log(age1)
//Number Methods
//console.log(age1.toString())// this convert number into string
//console.log(age1.toFixed(2))// round off the value
//console.log(age1.toPrecision(2))// give priority to the number according to the value given inside the ().
//const thousand = 100000
//console.log(thousand.toLocaleString("en-IN")) // put the , inside the value according to the india rule
//console.log(Number.MAX_VALUE)

//++++++++++++++++++++MATHS LIBRARY+++++++++
// IT IS OBJECT
const number1 = new Number(-25)
console.log(Math.abs(number1)) // convert negative value to positive
const number2 = 25.6
console.log(Math.floor(number2)) //round off the value to the down like 25.6 to 25
console.log(Math.round(number2)) // round off value if above than .5 than 1 and below thane .5 than 0
console.log(Math.ceil(24.1))// always round off the value to above
console.log(Math.sqrt(25))// squareroot the value
console.log(Math.pow(2,3))// power of the value 
console.log(Math.random())// bydefault written the value between 0 and 1
// to increase the value in random 
console.log(Math.random()*20) // the value never go above the 20
//but the problem is that it will give value 0.someting to resolve it
console.log((Math.floor(Math.random()*20))+1)// floor will round of the value to the down so it can give answer 0 but +1 can increase the 0 to 1
// if we want that we want value between 15 to 25 for that
const min=15
const max=25
console.log((Math.floor(Math.random()*(max-min+1))+ min))