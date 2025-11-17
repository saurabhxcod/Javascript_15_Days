
//Object
const user={
    username:"Saurabh",
    price:999,
    welcomeMessge:function(){
        console.log(`Welcome ${this.username}`)
        console.log(this)
    }

}
// //This keyword is used to refer the current context

//Global Scope
console.log(this) //{}
// user.welcomeMessge();
// user.username="sam"
// user.welcomeMessge();


// Welcome Saurabh
// {
//   username: 'Saurabh',
//   price: 999,
//   welcomeMessge: [Function: welcomeMessge]
// }
// Welcome sam
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessge: [Function: welcomeMessge]
// }

//Regular Expression
function chai(){
    let username="Saurabh"
    console.log(this.username)  //undefined
}
chai()


//Function Expression
// const chai=function(){
//     let username="Saurabh"
//     console.log(this.username)  //undefined
// }
// chai()


//Arrow function
// const chai=()=>{
//     let username="Saurabh"
//     console.log(this.username)  //undefined
// }
// chai()

//Explicit Return Arrow Function
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(4,5))


//Implicit Return Arrow Function
const add2=(num1,num2)=>(num1+num2)
console.log(add2(4,5))


