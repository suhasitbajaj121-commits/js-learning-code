const courseDetails = {
    coursename: "js",
    cousefees: 999,
    courseInstructore: "hitesh",
    courseLearner: "Suhasit"
}
console.log(courseDetails.coursename) // normal way of priting the value from object
const details = courseDetails
console.log(details.courseLearner)
const {coursename} = courseDetails// de-structure
const {cousefees: fee} = courseDetails // this is assigning the variable to the de-structure
console.log(coursename) // this is de-strcuture allows you to extract multiple properties from an object and bind them to distinct variables simultaneously
console.log(fee)