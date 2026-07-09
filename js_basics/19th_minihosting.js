// function and expression (mini hosting)
console.log(one(5)) // in function hum call create krne k phle bhi kr skte h 
function one(num1){
return num1
}

//console.log(name(8)) // this will give error
let name = function(num1){ // this is called expression means assigning function to the name variable and then call the function by the variable name this is known as hosting in this we cannot call the function before the declaration
    return num1
}
console.log(name(8))