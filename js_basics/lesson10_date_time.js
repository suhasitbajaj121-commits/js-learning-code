// Date 
//let todayDate = new Date(); // this gives the current date and time
//console.log(todayDate)
//Methods of Date
//console.log(todayDate.toString()) // convert the date into string and provide date and time
//console.log(todayDate.toDateString())// convert the date into readable form and remove the time
//console.log(todayDate.toLocaleDateString())// convert date into MM/DD/YYYY format and provide only date
//console.log(todayDate.toLocaleTimeString())// providetime 
// Creating own date and time
//let createdDate = new Date(2026,0,6) // month start with 0 format YYYY,MM,DD
//let createdDate = new Date("02-14-2026")// convert the bedefault format into MM-DD-YYYY
//console.log(createdDate.toDateString())

//time stamp 
//let timeStamp = Date.now() //.now will give the milisecond value and this mili second value is from the 1jst jan 1970 to till now 
//console.log(timeStamp)
//console.log(createdDate.getTime())//.getTime will convert the created time into mili seconds 
//to convert miliseconds into seconds divide by 1000
let newDate = new Date()
//console.log(newDate.getMonth()+1) // to get month . like .getMonth() many methods are there .getDay, .getDate etc
console.log(newDate.toLocaleString()) // this provide both date and time in MM/DD/YYY and HR/MIN/SEC , many other things we can do in this
console.log(newDate.toLocaleString('default', {
    weekday:"long"

})) // ap yha pr object define krte h y option object hote h jo toLocaleString Method ko bta te h ki is format m data chaiye or bhut sare parameter define kr skte h default ek paramter h jo toLocaleString ko btata h ki system ka default format use kro iske alwa "en-IN","en-US" y bhi parameter hote h and object bhi kafi hote h like year , month etc ctrl+space s  jate h object and parameter