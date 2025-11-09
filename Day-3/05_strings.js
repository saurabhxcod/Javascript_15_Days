// const name="Saurabh";
// console.log("Hello, "+name+"!");
// console.log(`Hello, ${name}!`);
const gameName=new String('Saurabh');    // String Object
console.log(gameName);  //Saurabh
console.log(typeof gameName);   // object
console.log(gameName.toUpperCase());   //SAURABH
console.log(gameName.toLowerCase());   //saurabh
console.log(gameName.length);  //7
console.log(gameName[0]);   // S
console.log(gameName.charAt(0));   // S
console.log(gameName.indexOf('a'));   // 1
console.log(gameName.lastIndexOf('a')); //4
console.log(gameName.slice(1,4));   //aur   [a,b)
console.log(gameName.split('a'));   // [ 'S', 'ur', 'bh' ]
console.log(gameName.substring(1,4));   //aur  [a,b)
console.log(gameName.substr(1,4));   //aura  [start, length]
console.log(gameName.replace('Saurabh','SAURABH'));  // SAURABH

const newString="   Hello World   ";
console.log(newString.trim());   //Hello World
console.log(newString.includes('World'));  // true