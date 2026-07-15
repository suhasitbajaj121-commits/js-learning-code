// if else 
// if k ander ki condition true hogi tbhi ander ka code execute hoga wanra else wala part use hoga 
// conditionl operator use in the if else >,<, >=,<=,!= not equal to , == equal to , === triple equal to ye data type bhi check krta h  , !== 
if(2==3){
    console.log("Yes")
}
else {
    console.log("no")
}

//NESTED if else 
const balance = 1000
if(balance < 500){
console.log("less than 500")
} else if(balance < 1000){
    console.log("less than 1000")
} else if(balance < 1500){
    console.log("less than 1500")
}
else{
    console.log("less than 2000")
}

// agr variable m value h to usko true mana jayega bina kisi comparsion k or if m execute hoga or empty h to wrong mana jayega

// false value = false , 0 , -0, Bigint on , "", null , undefined , NaN
// true value = "false"  string m false and 0 true values hoti h ,"0"," ",[],{},function (){} 

let userName = []
if (userName.length===0){
    console.log("Array is empty ") // to check array is empty or not
}

// to check object is empty or not 
let obj1 ={}
if(Object.keys(obj1).length===0){ // Object.keys(obj1) provide the array of the keys of object
    console.log("object is empty")
}

// && , || and or operaotor
// in && operator both condition must be true , in || opertor only one condition must true

// Nullish coalescing operator (??): null undefined 
let var1;
var1 = 10 ?? 20 // agr value null and undefined ati h db s ya khi s to ukso handle kr ke ya to value assign krta h ya usko handle krta h 
console.log(var1) 

// Terniary operator
// condition ? true statement : false

const iceteaprice = 100
iceteaprice >80 ? console.log("yes"): console.log("no")