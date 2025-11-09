const accountId=144553
let accountEmail="saurabh@gmail.com"
var accountPassword="Saurabh@123"

accountEmail="saurabh_updated@gmail.com"
accountPassword="Saurabh@456"
var accountCity="Pune"

accountId=200345 // This will throw an error because accountId is a constant
// let accountEmail="saurabh_updated@gmail.com" // This will throw an error because accountEmail is already declared

console.log("Account ID:", accountId)
console.table([accountEmail, accountPassword, accountCity])

//Prefer using const and let over var to avoid scope issues and accidental redeclarations.
//Use const for variables that won't change and let for those that will.
 