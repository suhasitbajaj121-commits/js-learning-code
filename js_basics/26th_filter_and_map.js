// filter method filter the value 
// let books = [1,2,3,4,5,6,7,8,9,10]
// const val = books.filter((value1)=> value1>4)
// const val = books.filter((value1)=> {value1>4}) // if we use {} then  we have to return something 
// console.log(val)

// let obj12=[
//     {
//         booktitle:"Book1",
//         bookauthor:"auth1"
//     },
//     {
//         booktitle:"Book2",
//         bookauthor:"auth1"
//     },
//     {
//         booktitle:"Book3",
//         bookauthor:"auth2"
//     },
// ]
// const bookDetails = obj12.filter((details1)=>details1.bookauthor==="auth2")
// console.log(bookDetails)

//LINKING OF THE METHODS 
// let array1= [1,2,3,4,5,6,7,8,9,10]
// let result = array1.map((values)=> values*10).map((values)=> values+1).filter((values)=> values>40)
// console.log(result)

//REDUCE METHOD
// let array2 = [1,2,3]
// // let inital = 0 y bhi ek initial value h first argument k liye 0 ki jgh kuch bhi ho skta h 
// let result1 = array2.reduce((acc, currentvalue)=>{ // reduce is used to add the records in the variable sare records ek sath 
//     return acc+currentvalue // first argument jo hota h vo to ek unknown argument hota h jisko ek inital value chaiye hoti h like acc. and 2nd argument array s value uthata h 
//     // value add hoke acc first argument m chli jati h fir usko ek sath print krwa skte h 
// }, 0) // y inital value h first argument k liye
// console.log(result1)

let shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "html course",
        price: 500
    },
    {
        itemName: "css course",
        price: 500
    },
    {
        itemName: "python course",
        price: 1000
    },
]
let myOrders = shoppingCart.reduce((acc, currentvalue)=>{
    return acc + currentvalue.price
},0)
console.log(myOrders)