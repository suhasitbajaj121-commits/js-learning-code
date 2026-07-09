// this current context (context mtlb values)  k bare m bta ta h 
// browser m jo global object h vo h window means console me jake console.log(this)
// and node m {} blank h global object 
//this jis object ke context mein code chal raha hota hai, us object ko refer karta hai.
const obj1 ={
    username: "suhasit",
    age:25,
    message:function(){
    console.log(`${this.age} your age and your name ${obj1.username}`) // this yha object ki value ko function m access krne k liye use kiya gya h yha object ka name bhi use kr skte h 
    }
}
obj1.message()

/// this h vo function and arrow function me use nhi le skte , function m this kuch text content deta h and arrow function m empty object deta h {}

// ARROW FUNCTION
const add= (num1 , num2)=>{
    return num1 + num2
}
console.log(add(4,5))

//another way of writing the arror function without using the paranthesis
const sub = (num1 , num2) => (num1-num2)
console.log(sub(5,1))

// in demo object can be define inside the arrow function
const demo = () => ({username:"suhasit"})
console.log(demo())


// *** object ko function declare krna 
// function multi(){
//   return a ={
//         username:"suhsit",
//         age:"95"
//     } 
// }
// console.log(multi())