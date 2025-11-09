//Starting With the medium topics

const myArr=[1,2,3,4,5,true,"Hello"]  //collection of items of different types and they are resizable
console.log(myArr)
console.log(myArr.length)  //indexing starts from 0
//creates a shallow copy of the array->shares the reference of the original array
//deep copy->creates a new array with new reference
const newArr=myArr.slice(0) //deep copy
console.log(newArr)

//Array Methods

myArr.push("World") //adds an element at the end of the array
console.log(myArr)  //'[ 1, 2, 3, 4, 5, true, 'Hello', 'World' ]

myArr.pop() //removes the last element from the array
console.log(myArr)  //'[ 1, 2, 3, 4, 5, true, 'Hello' ]

myArr.unshift("Start") //adds an element at the beginning of the array
console.log(myArr)  //['Start', 1, 2, 3, 4, 5, true, 'Hello' ]

myArr.shift() //removes the first element from the array
console.log(myArr)  //[ 1, 2, 3, 4, 5, true, 'Hello' ]

console.log(myArr.indexOf(3)) //2 ->gives the index of the element
console.log(myArr.indexOf("NotFound")) //-1 ->if element is not found
console.log(myArr.includes(4)) //true ->checks if the element is present in the array
console.log(myArr.includes("NotFound")) //false ->if element is not found
myArr.splice(2,2) //removes elements from index 2 to 2+2-1
console.log(myArr) //[ 1, 2, 5, true, 'Hello' ]
myArr.splice(1,0,"Inserted") //inserts element at index 1 without removing any element
console.log(myArr) //[ 1, 'Inserted', 2, 5, true, 'Hello' ]
myArr.splice(3,1,"Replaced") //replaces element at index 3
console.log(myArr) //[ 1, 'Inserted', 2, 'Replaced', true, 'Hello' ]
const subArr=myArr.slice(1,4) //creates a shallow copy of the array from index 1 to 4-1
console.log(subArr) //[ 'Inserted', 2, 'Replaced' ]
const strArr=myArr.join(" - ") //joins the array elements into a string with the given separator
console.log(strArr) //1 - Inserted - 2 - Replaced - true - Hello
myArr.reverse() //reverses the array
console.log(myArr) //[ 'Hello', true, 'Replaced', 2, 'Inserted', 1 ]
myArr.sort() //sorts the array (only works well with strings and numbers)
console.log(myArr) //[ 1, 2, 'Hello', 'Inserted', 'Replaced', true ]

console.log("Slice vs Splice");
const array1 = ['a', 'b', 'c', 'd', 'e'];  

const sliced = array1.slice(1, 4); // creates a new array ['b', 'c', 'd']
console.log('Sliced Array:', sliced); // Output: Sliced Array: [ 'b', 'c', 'd' ]
console.log('Original Array after slice:', array1); // Original array remains unchanged

const spliced = array1.splice( 1,3, 'x', 'y'); // removes 3 elements starting from index 1 and adds 'x' and 'y'
console.log('Spliced Array:', spliced); // Output: Spliced Array: [ 'b', 'c', 'd' ]
console.log('Original Array after splice:', array1); // Original array is modified: [ 'a', 'x', 'y', 'e' ]

