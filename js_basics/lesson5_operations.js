//Basic operations (+,-,*,/,%,**)
console.log(2+2) //addition
console.log(2-2) //subtraction
console.log(2*4) //multiplication
console.log(9%2) //modules gives remainder
console.log(2**4) // power
console.log(10/2) // quotient 

//Joint String 
let firstName = "suhasit"
let secondName = " bajaj"
console.log(firstName + secondName) // + is used to join two string which is known as concatenation

console.log("1"+"2") //1 and 2 are number but they are written in " " considered as string
console.log("1"+2) //here 1 is string but 2 is number still the JS will consider 2 as string because of the 1
console.log("1"+2+2)//here 1 is string but 2 +2 is number still the JS will consider 2 as string because of the 1
console.log(1+2+"2")// here 1 is number so it will consider the 1st 2 as number and add the 1 and 2 and 2nd 2 is consider as the string
console.log("5"+2) // this will give 52 because first value is string so Js will consider 2nd value as string and join them
console.log("5"*2) // it will give 10 * convert "5" into number like * , -,/ will also convert the "string number value" into number
console.log("5"+2*3) // it will give 56 because according to BODMAS first multiplication multiply the 2 and 3 then + will concate the 6 into 5 because 5 is string
console.log(("5"+2)*3) // here also according to thE BODMAS first 52 because they will concate then multiply with 3 and give answer 156
//PREFIX AND POSTFIX 
let x=3
const y=++x // prefix when ++,-- written at starting of value it will first increase value then assign to the y like 3 will first increase and assign to y
console.log(y)
let z=5
const q= ++z //postfix ++,-- written after value it will not increase the value directly assign to the value like z value not increase it will assign 5 to q
console.log(q)

