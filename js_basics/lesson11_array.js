//array 
//let myArray = [2,3,4,"Ilu"] // array me [] ka use hota h or ek sath number string define kr skte h or array me multiple values store kr skte h
//console.log(myArray[3]) //array me access[] s kiya jata h bracket me index numbr dale jate h index number 0 se star hote h 
//let myNewArray = new Array(1,2,3,"bajaj") // yha array ka object bnta h isme [] lgane ki need nhi h 
//console.log(myNewArray[3])

//METHODS OF ARRAY 
//let myNew = [10,25,26,30,78,96,456,123,456,146,236,5236,8933,784523,3265666]
//let anotherArray = ["suhasit", "bajaj"]
//let join = myNew.concat(anotherArray) // concat means join the two array
//myNew.push(5) // add new value at end of the array
// myNew.pop()// remove last value from array
//myNew.unshift(4)// add value from start 
//myNew.shift()// remove value from start 
//console.log(myNew.includes(5)) // shows wether value present in the array or not
//console.log(myNew.indexOf(4)) // tell the index no. of the value
//let newWork = myNew.join() // convert the array into the string
// console.log(newWork)

//slice in array
//let newCreatedArray =[12,36,4,5,89,696,3,693,463,2663,566,3665]
//console.log("A ",newCreatedArray)
//let sliceMethod = newCreatedArray.slice(1,6)// ignore the last value
//console.log(sliceMethod)
//console.log("B ", newCreatedArray)

// splice method in array
// let new2CreatedArray =[12,36,4,5,89,696,3,693,463,2663]
// console.log("A ",new2CreatedArray)
// let spliceMethod = new2CreatedArray.splice(1,6)// print the last value but remove that values from the array and make the changes in the original array
// console.log(spliceMethod)
// console.log("B ", new2CreatedArray)

//Array can have number , string , boolean , objects , another array 
let heros = ["thor", "iron man"] // array inside the array , 2nd array considered as the value for the heros array index value is 3
let dc_heros=["batman", "superman"]
// console.log(heros[2][1])// it will access the value of another array that is present inside the heros array

// array joining new way known as SPREAD METHOD instead of concat use this 
let combineHeros = [...heros,...dc_heros] //... known as spread 
console.log(combineHeros)

//flat in arrat
let numbers = [1,2,3,[45,63],[5,9,[9,10]]]
let newNumbers = numbers.flat(Infinity) // converted the above array into one simple array
console.log(newNumbers)

//converting anything to the array Array keyword is used
console.log(Array.isArray("hitesh")) //.isArray check wether this value is array or not 
console.log(Array.from("Ilu")) // .from and .of converted the value into the array, can take one value 
let number1 = 100
let number2=300
let number3=400
let obj1={
    name:"Suhasit",
    age:25
}
console.log(Array.of(obj1.age)) //.of converted the values into the array, it can take the multiple values 