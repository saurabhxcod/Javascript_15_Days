"use strict"; //treat all JS code as newer version
// document.alert("Welcome to JavaScript Datatypes");
// Data types in JavaScript
// 1. Primitive Data Types:
// a) Number: Represents both integer and floating-point numbers.
let num = 42; // Integer
let floatNum = 3.14; // Floating-point number

// b) String: Represents a sequence of characters enclosed in single or double quotes.
let str = "Hello, World!"; 

// c) Boolean: Represents a logical entity that can have two values: true or false.
let isJavaScriptFun = true;

// d) Undefined: A variable that has been declared but not assigned a value.
let undefinedVar;

// e) Null: Represents the intentional absence of any object value.
let nullVar = null;

// f) Symbol: A unique and immutable primitive value used as the key of an object property.
let sym = Symbol("uniqueIdentifier");
// g) BigInt: Represents integers with arbitrary precision.
let bigIntNum = BigInt(9007199254740991);


// 2. Non-Primitive Data Types:
// a) Object: A collection of key-value pairs.
let person={
    name:"Saurabh",
    age:30,
    isEmployed:true
}
console.log(typeof person); // "object"
console.log(person);
console.log(person.name);

// b) Array: An ordered collection of values.
let colors=["Red","Green","Blue"];
console.log(typeof colors);
console.log(colors);
console.log(colors[1]); // "Green"


// c) Function: A block of code designed to perform a particular task.
function greet(name){
    return "Hello, " + name + "!";
}
console.log(typeof greet); // "function"
console.log(greet("Saurabh")); // "Hello, Saurabh!"


// Note: JavaScript is a dynamically typed language, meaning you don't have to declare the data type of a variable explicitly. The type is determined at runtime based on the value assigned to the variable.

// You can use the typeof operator to check the data type of a variable.


//=============================================================================================================

//Memory->Stack(Primitive) , Heap(Non-primitive)

let user={
    name:"Saurabh",
    age:30
}   