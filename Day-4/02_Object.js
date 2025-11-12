//Object Destructuring
const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor:"Ravi Kumar",
    courseDuration:"30 days"
}

const {courseName,price,courseInstructor,courseDuration}=course; //Destructuring
console.log(courseName); //JavaScript
console.log(price); //999
console.log(courseInstructor); //Ravi Kumar
console.log(courseDuration); //30 days



//API
//JSON response example
// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }