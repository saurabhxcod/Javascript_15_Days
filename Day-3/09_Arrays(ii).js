const myArray1=[1,2,3,4,5]
const myArray2=["a","b","c","d","e"]

myArray1.push(myArray2)
console.log(myArray1)  //[ 1, 2, 3, 4, 5, [ 'a', 'b', 'c', 'd', 'e' ] ]

const newArray=myArray1.concat(myArray2)  //retuirs a new array by merging two arrays
console.log(newArray)  //[ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e' ]

const newArray2=[...myArray1,...myArray2] //spread operator to merge two arrays
console.log(newArray2)  //[ 1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e' ]

const anotheArray=[...myArray1, ...[6,7,8], ...myArray2]
console.log(anotheArray)  //[ 1, 2, 3, 4, 5, 6, 7, 8, 'a', 'b', 'c', 'd', 'e' ]

const arr1=[1,2,3,[4,5,7,8],[9,10,11]]
const flatArr=arr1.flat(Infinity) //flattens the array by one level
console.log(flatArr)  //[ 1, 2, 3, 4, 5, 7, 8, 9, 10, 11 ]

console.log(Array.isArray(myArray1)) //true ->checks if the variable is an array
console.log(Array.isArray("NotAnArray")) //false
//Array.from() ->creates an array from an array-like object
const str="Hello"
const strArr=Array.from(str)
console.log(strArr)  //[ 'H', 'e', 'l', 'l', 'o' ]

//Array.of() ->creates an array from a list of arguments
const numArr=Array.of(1,2,3,4,5)
console.log(numArr)  //[ 1, 2, 3, 4, 5 ]