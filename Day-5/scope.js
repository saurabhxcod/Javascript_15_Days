// //Hoisting
// let a=10
// const b=20  //let and const have local scope
// var c=30  //var has global scope

const b=50

if(true){
    let a=10
    const b=20
    var c=30
}

// console.log(a); //not accessible
// console.log(b); //not accessible
// console.log(c); //30


function one(){
    const username="Saurabh"

    function two(){
        const website="Chrome"
        console.log(username)
    }
    // console.log(website);
    two();
}
one();


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


//================================================
console.log(addOne(5))
function addOne(num){
    return num+1;
}
// addOne(1)
//This function will run and give me 6 



// addTwo(2);=>This will give me error
const addTwo=function(num){
    return num+2;
}
// addTwo(2);


