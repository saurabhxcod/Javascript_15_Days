const score=400;
const balance=new Number(1500);
console.log(score);  //400
console.log(balance);   //[Number: 1500]
console.log(typeof score); //number
console.log(typeof balance);  //object
console.log(score.toString()); //"400"
console.log(typeof balance);//object
console.log(balance.toFixed(2));  //"1500.00"

const otherNumber=123.4567;
console.log(otherNumber.toPrecision(3));  //"123"
console.log(otherNumber.toPrecision(5));  //"123.46"

const hundreds=123456789;
console.log(hundreds.toLocaleString());  //"123,456,789"
console.log(hundreds.toLocaleString("en-IN"));  //"12,34,56,789"



//Maths
console.log(Math.PI);  //3.141592653589793
console.log(Math.E);   //2.718281828459045
console.log(Math.sqrt(16));  //4
console.log(Math.pow(2,5));  //32
console.log(Math.abs(-200));  //200
console.log(Math.ceil(4.2));  //5
console.log(Math.floor(4.8));  //4
console.log(Math.round(4.5));  //5
console.log(Math.min(3,5,1,8,2));  //1
console.log(Math.max(3,5,1,8,2)) ; //8
console.log(Math.random());  //random number between 0 and 1
console.log(Math.floor(Math.random()*10)+1);  //random number between 1 and 10
console.log(Math.floor(Math.random()*100)+1);  //random number between 1 and 100
console.log(Math.floor(Math.random()*1000)+1);  //random number between 1 and 1000

const a=[3,5,1,8,2];
console.log(...a);  //3 5 1 8 2  //Spread Operator->Expands the array into individual elements
console.log(Math.max(a));  //NaN    

const maxInArray=Math.max(...a);   //8
const minInArray=Math.min(...a);  //1

const max=20;
const min=10
const randomInRange=Math.floor(Math.random()*(max-min+1))+min;  //random number between 10 and 20
