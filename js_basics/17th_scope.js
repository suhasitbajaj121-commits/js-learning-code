// global scope and local scope 
let a = 10 // this is global scope this value can be used inside the any block of scope

if(true){
    let a = 10 // this is local scope this a can only use inside this if , if k bhar y a use nhi ho skta 
}

// let const and var m differnce 
if(true){
    let q=7
    const w=9
    var e=10
}
//console.log(q) // q value will not print because q is declare inside the if and ab y q sirf if k ander hi use ho skta h uske bhar nhi
//console.log(w) // same as let q 
console.log(e) // y e ki value print ho jayegi kyo ki iske scope ki koi restriciton nhi h y scope tak available nhi ho skta
// windows m globale scope alg h and node m yha code m global scope alg h 