// IIFE immediately invoked function expression
// global scope k pollution s problem hoti h kai bar ya uske ander jo bhi variables declare h usko htan k liye or function ko immeditaly use krne k liye IIFE ka use lete h.
//()() first paranthesis is for defination of the function and 2nd for calling of the function
(function chai(){ // this is a named IIFE
    console.log("DB connected")
})(); // we have to end the IIFE for this we use semi column 

((name)=>{ // this is unnamed IIFE 
console.log(`hii ${name}`)
})("suhasit");