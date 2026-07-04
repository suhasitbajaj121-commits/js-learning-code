//STACK MEMORY used in the primitive data type
let userEmail= "suhasit@gmail.com"
let anotherEmail = userEmail // here the value of userEmail assigned to the anotherEmail but the copy not original value 
anotherEmail="bajaj@gmail.com" //changing value of anotherEmail variable
console.log(anotherEmail)
console.log(userEmail)


//HEAP MEMORY USED IN NON-PRIMITVE DATA TYPE
let myObj ={
    name: "suhasitBajaj",
    age:23
}
let anotherObj=myObj
anotherObj.name="Bajaj" //. is used to access the inside value of object and here the name value changed to Bajaj
console.log(anotherObj) // value changed because the myObj original reference is assigned to the anotherObj
console.log(myObj)