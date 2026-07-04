//PRIMITIVE DATA TYPE
//numbers = 12
 // string ="suhasit"
 //boolean= true or false
 //null= stand alone it means null means empty
 //undefiend = not defined any value in the variable
 //object
 //symbol= unique make the variable and their value unique

let name="suhasitbajaj"
let number=838796222
let age=true
let sirName=null;
let course;
let id= Symbol('123')
let anotherId=Symbol('123')
console.log(id===anotherId) //both variable have 123 value still the answer is false because symbol made them unique.
console.log(typeof course)
//typeof is used to get the datatype of the variable

//NON-PRIMITIVE DATA TYPE
// array = ["suhasit", "bajaj"]

//object ={ object declare between {}
// let name="suhasit"
// let age=3
// } 

// function

let introMy = ["suhasit","bajaj","23"]
console.log(introMy)
console.log(typeof introMy) //data type object

let myObj={
    name:"suhasit",
    age:26
}
console.log(myObj)
console.log(typeof myObj) //data type object

let myName = function(){
    console.log("suhasit");
}
myName()
console.log(typeof myName) // data type function object 