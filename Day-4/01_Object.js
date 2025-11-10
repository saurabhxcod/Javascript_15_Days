//Singleton
// Object.create(null)


//Object Literal

const mySymbol=Symbol("key1");
const Jsuser={
    name:"Ravi",
    [mySymbol]:"myKey1",    //Symbol Notation
    age:22,
    skills:["HTML","CSS","JS"],
}

// console.log(Jsuser.name);  //Dot Notation
// console.log(Jsuser["name"]);  //Bracket Notation
// console.log(Jsuser[mySymbol]);  //Symbol Notation

Jsuser.age=23;  //Update
Jsuser.skills.push("ReactJS"); //Update
// Object.freeze(Jsuser); //Freeze Object
Jsuser.age=24;  //Not Updated
// console.log(Jsuser); 

Jsuser.greeting=function(){   //Method
    console.log("Hello JS User");
}

Jsuser.greeting2=function(){   //Method
    console.log(`Hello JS User,${this.name}`);
}
console.log(Jsuser.greeting());  //Method Call
console.log(Jsuser.greeting2());  //Method Call




//Singleton

const tinderUser=new Object();
console.log(tinderUser); //{}
tinderUser.name="Ravi";
tinderUser.age=22;
tinderUser.isLoggedIn=true;

console.log(tinderUser); //{ name: 'Ravi', age: 22, isLoggedIn: true }

const regularUser={
    email:"xyz@gmail.com",
    fullName:{
        userFirstName:"Ravi",
        userLastName:"Kumar"
    }
}

console.log(regularUser.fullName.userFirstName); // Ravi

const tinderUser2=new Object(
    {
        name:"Ravi",
        age:22,
        isLoggedIn:true,
        cast:"BC"
    }
);
console.log(tinderUser2); //{ name: 'Ravi', age: 22, isLoggedIn: true, cast: 'BC' }


//Combine Objects

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};
const combineObj=Object.assign({},obj1,obj2,obj3);
console.log(combineObj); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj4={...obj1,...obj2,...obj3};
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const users=[
    {
        id:1,
        email:"xyz"
    },
    {
        id:2,
        email:"abc"
    },
    {
        id:3,
        email:"def"
    }
]

console.log(users[1].email); //abc

console.log(Object.keys(tinderUser2)); //[ 'name', 'age', 'isLoggedIn', 'cast' ]
console.log(Object.values(tinderUser2)); //[ 'Ravi', 22, true, 'BC' ]

