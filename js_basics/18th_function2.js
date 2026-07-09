function one(){
    const username ="suhasit"
    function two(){ // this is called function inside the function means nested function
        // in this the child function can access the variables of parent function 
        const age =25
        console.log(username)
    }
    //console.log(age) // this will give error because age is defined inside the two function and parent function cannot access the variable of child function
   two() // two is defined inside the one function so it can called inside one function not outside it 
}
one()

// same in if else
if (true){
    const username="suhasit"
    if(username==="suhasit"){
        const website="bajaj"
        console.log(username + website) // this will print the value and access the username becuase child can access the parent variable
    }
    //console.log(website) // this will error because website is declared inside the 2nd if 
}

