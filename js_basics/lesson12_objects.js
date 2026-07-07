// objects inthe js can be made using the 2 things , 1st constructor and 2nd literals , the objects that is created using the consturctor is singleton object means this object is only object and unique object
//object literals // object is the key value pairs can have multiple value and array and function and another object
const keyValue = Symbol("key1") // symbol is the data type 

let newObj ={
    name:"Suhasit",
    [keyValue]: "mykey1", // this is the way to access the symbol data type in object 
    age:25,
    gmail:"suhasit@gmail.com",
    courses:["js","html","css"],
    // greet: function(){
    //     console.log("hello janta")
    // }
}
//newObj.gmail="Bajaj@gmailcom" //change the value
//newObj.number=8989822 // add new key value inside the object 
//console.log(newObj.greet()) // to print the value of the function that we created inside the object we hve to declare the key with () seprately then the value inside it will print 
//Object.freeze(newObj) // does not allow value to change
//console.log(newObj["name"]) // access the value inside the object using the key but this one is correct
//console.log(newObj.name) // another way of accessing the value of object using key

//function inside the object 
newObj.greeting= function(){
    console.log("hello public")
}
console.log(newObj.greeting) // this will print that greeting is the anonymous function
console.log(newObj.greeting())// it will print the value of the function 

//this keyword use in object
newObj.greeting2= function(){
    console.log(`hello public ${this.name}`) // this is used jab hum same object ko refrence krna chahte h mtlb newObj ko access krne k liye this ka use krenge yha backlits me newObj nhi ata to uski jagah this sue m lenge y object ki sari key values provide krwata h 
}
console.log(newObj.greeting2())