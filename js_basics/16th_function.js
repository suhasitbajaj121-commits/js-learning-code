// In JavaScript, a function is a reusable block of code designed to perform a specific task. Functions eliminate repetitive code, accept inputs, process data, and return an output.
// simple word code ko pacakge m band kr diya h fir us package ko khi bhi use kr skte h jab chahe jitni bar
// function to ek keyword , myName function ka name , { scope ho gya function ka},( parameter pass krne k liye)
function myName(){
    console.log("Suhasit")
}
myName() // y use hota h function ko excute krne k liye ya call krne k liye. 
// jese hi myName k age () lg gya vo function call hoga, myName hoga to y function ka refrence h 

function addTwoNumbers(num1, num2){ // something written inside the () in function known as parameter
console.log(num1+num2) // here the function is priting the value not returning any thing , priting and writing is different things
}
addTwoNumbers(5,6) // something that we write at the time of calling the function isnide () are known as argument , and this is called passing the argumet

function subtract(num1 , num2){
    return num1-num2 // here the function is returing something that we will store in the variable at the time of calling the function or we will just print the value through console.log
   // console.log("suhasit") // if we write something after the return it will not print or run 
}
let result = subtract(9,5) // if we does not pass anything here then the function will write undefined 
console.log(result)

function userName(user = "lol"){ // = lol y value user ko asign ki gyi h if function call krte time kuch argument nhi bheje tb y value ayegi or agr value pass hue h to y replace hoke jo value pass hue h vo hi ayegi
    return `${user} just logged in`
}
console.log(userName("bubu")) // bubu will replace the lol , if no argument passed then lol will assign

// rest operator in function
function cartItemsPrice(...num1){ //... rest operator will store all the values that passed at the time of calling the function , store in num1 and print the value in the form of array 
    return num1
}
console.log(cartItemsPrice(5,56,78)) // 3 values are passed but print only 5 because in parameteronly one parameter is avaiable to print all the value we use rest operator (...)

// passing object in the function 
//1 way 
let obj1 ={
name: "suhasit",
fee:"100000"
}
function userData(acceptobj){ // yha argument jo object aya tha store hua
    return `you name ${acceptobj.name} and your fees is ${acceptobj.fee}` // yha acceptobj n object ki value access kri 
}

console.log(userData(obj1)) // yha humne obj ko function argument k through pass kiya
//2nd way
function userData2(acceptobj){
    return `you name ${acceptobj.name} and your fees is ${acceptobj.fee}`
}
console.log(userData2({
    name:"radhika",
    fee:"2000"
}))

//passing array in the function
//1 st way
let array1 =["suhasit",1,2,34,6]
function arrayFunction(acceptingarray){
    return acceptingarray[2]
}
console.log(arrayFunction(array1))
// 2nd way
function arrayFunction2(acceptingarray){
    return acceptingarray[2]
}
console.log(arrayFunction2([22,36,45,63]))

function test2(){
    console.log(5); // y value to 5 print krega lekin 
}

console.log(test2()); // yha undefined kyo ki function kuch return nhi kr rha 