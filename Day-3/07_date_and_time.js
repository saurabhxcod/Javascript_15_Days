console.log(Date.now())          // Outputs the number of milliseconds since January 1, 1970
console.log(new Date())           // Outputs the current date and time as a Date object
console.log(new Date().toString()) // Outputs the current date and time as a human-readable string
console.log(new Date().toISOString()) // Outputs the current date and time in ISO 8601 format
console.log(new Date().getFullYear()) // Outputs the current year
console.log(new Date().getMonth() + 1) // Outputs the current month (0-11, so add 1 for 1-12)

let myTimeStamp=new Date().now();
console.log(myTimeStamp)          // Outputs the current timestamp in milliseconds