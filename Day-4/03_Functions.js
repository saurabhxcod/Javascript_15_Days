//Memory Management 
function myFunc() {
    console.log("Hello World");
}

myFunc(); //Function Call
// console.log(typeof myFunc); //function

/*
function addTwoNum(num1,num2){
    return num1+num2;
}
addTwoNum(); //NaN
addTwoNum(5,7); //Function Call
console.log(addTwoNum(5,7)); //12
*/


function loginUserMessage(userName){
    if(!userName){
        console.log("Please enter a valid user name");
        return;
    } 
    return `Hello ${userName}, welcome back!`;
}
// loginUserMessage("Ravi"); //Function Call but it will not print anything
// loginUserMessage("Ravi"); //Function Call but it will not print anything
// loginUserMessage(); //Function Call but it will not print anything undefined
console.log(loginUserMessage("Chomchie")); //Please enter a valid user name undefined
// console.log(loginUserMessage("Ravi")); //Hello Ravi, welcome back!
// console.log(loginUserMessage("Kumar")); //Hello Kumar, welcome back!


//Shoping Cart

// ...->rest operator | spread operator
function calCartPrice(...num1){
    return num1;
}
console.log(calCartPrice(200,300,400,500)); //[ 200, 300, 400, 500 ]
// ==============================================================
//Function with Object as parameter
const user={
    userName:"Ravi",
    price:999
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleObject(user); //Username is Ravi and price is 999

//==============================================================
//Array inside function
const myArr=[1,2,3,4,5,6,7,8,9];
function printArray(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
printArray(myArr);

