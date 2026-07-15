// for (let i =1;i<=10;i++ ){
// for(let j = 1 ; j<=10;j++)
// {
//     console.log(i + "*" + j +"="+ i*j)
// }
// }

// let myArray =["suhasit", "bajaj","Radhika","tiwari"]
// for(let i =0;i<myArray.length;i++){
//     console.log(myArray[i])
// } 

// break nd continue in loops

// for (let i= 1;i<=20;i++){
//     if(i==19){
//         break;
//     }
    
//     console.log(i)
// }
// for (let i= 1;i<=20;i++){
//     if(i==19){
//         continue;
//     }
//     console.log(i)
// }

// while 
// first intialization 
// check condition 
// incremend decrement
// let i = 0;
// while(i<10){
//     console.log(i)
//     i++
// }

// do while execute atleast one time even if the thing is wrong , condition check bad m hogi 
// let score = 10
// do {
//     console.log(score)
//     score++
// } while(score<10)

// for of loop 

// let myName = ["suhasit", "bajaj", "baniya" ,"baba","sanki"]
// for (const details of myName) {
//     console.log(details)
// }

// const val = "hellpo world"
// for(let i =0;i<val.length;i++){
//     console.log(val[i])
// }

// const val = "hello world"
// for (const name of val) {
//     console.log(name)
// }

//MAPS is object and work as loops
// const map = new Map()
// map.set("Suhasit","Bajaj") // value set k through assign hoti h
// map.set("bajaj","Suhasit") // first word is key and 2nd word is value
// map.set("baba","Sanki")
// console.log(map)

// for (let [key, value] of map){  // print key and value of the map 
//     console.log(key , value)
// }
// objects cannot itrate using for of loop and map loop , for loop for object itration we use for in looop
// let obj1={
//     name:"suhasit",
//     age:"25"
// }
// for (const i in obj1){
//     console.log(obj1[i])
// }

// let array1  = ["abc","cdf","dfg"]
// for (let val in array1){
//     console.log(array1[val])
// }

// for each function  . foreach does not return anything
let array1 = ["js","loop","jdk","jsn"]
// array1.forEach(function (nameofcourse){ // foreach loop include the call back function which does not have any name and argument in the function bring the value from the array and print it
//  console.log(nameofcourse)
// })

array1.forEach((nameofcourse)=>{
    console.log(nameofcourse)
})

// passing function in for each loop
function items(printitem){
    console.log(printitem)
}
array1.forEach(items) // y function ka refrence h yh value array m s leta h or prinitem m bhejta h vapis or print krwata h call krne ki need nhi h function ko