/*IIFE (Immediately Invoked Function Expression) 
An IIFE is a function that executes immediately after it is created.
Syntax:
(function(){
    // code
})();

Why Use IIFE?
1. Creates a Private Scope
Variables inside an IIFE cannot be accessed outside.
Prevents global scope pollution.

2. Avoids Variable Name Conflicts
Different scripts can use same variable names safely.

3. Executes Code Immediately
Useful for one-time setup tasks.

4. Used in Module Pattern (Before ES6)
Helps create modules with private variables and public methods.

5. Avoids Hoisting Problems
Keeps temporary variables inside a local scope.

*/

//Named IIFE
(function connectDB(){
    console.log('MongoDB Connected')
})();

((name)=>{
    console.log(`Hello ${name}`)
})('Saurabh');   //Hello Saurabh


function one(){
    console.log(1);
    two()
}

function two(){
    console.log(2);
    three()
}

function three(){
    console.log(3);
}

one()
two()
three()