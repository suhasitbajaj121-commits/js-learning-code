// object singletone
let newValueObject = new Object()
newValueObject.name ="suhasit" // assiging value to the singleton object
newValueObject.age=25
console.log(newValueObject.name)

// object inside the object
let objInsideObj   = {
    name:"suhasit",
    fullname:{
        userfullname:{
            fullname: "suhasit bajaj"
        }
    }
}
console.log(objInsideObj.fullname.userfullname.fullname) // accessing value inside the obj

//combining the objects 
let obj1 = {
    a:1,b:2
}
let obj2={
    c:3,d:4
}
let obj3={
    e:5,f:6
}
let combiedObj = Object.assign({}, obj1,obj2,obj3)// .assign is used to combine the objects and first value in assign is target where the combined values are stored and 2nd place values are source that we combined
console.log(combiedObj)

let combineObj2 ={...obj1,...obj2,...obj3}  //another method of combining the object
console.log(combineObj2) 

// accessing the value that came from the data base
//ex: user data came from the data base it will come in the form of array and isnide that array object is present
let user =[
    {
        id:1,
        name:"suhasit"
    },
    {
        id:2,
        name:"radhika"
    },
    {
        id:3,
        name:"bubu"
    }
] // this also known as object inside the array 
console.log(user[1].name) // user is array and so the index value than inside array object so .name

// get object value and keys
console.log(Object.values(obj1)) // values come in the form of array 
console.log(Object.keys(obj1))// key come in the form of array 
console.log(Object.entries(obj1)) // all the values come in the form of array
console.log(obj1.hasOwnProperty("a")) // check wether the property is present or not means key
console.log(obj1.length)