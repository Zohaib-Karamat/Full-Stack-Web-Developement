// // boolen to string
// let value = true;
// console.log(typeof(value))
// value = String(value)
// console.log(typeof(value))


// // boolen to string
// let value1 = true;
// console.log(typeof(value1))
// value1 = Number(value1)
// console.log(typeof(value1))


// for loop  when number of iterations are known
// for(let i=0;i<5;i++){
//     console.log("hello im there");
// }

// while loop    when number of iterations are unknown
// let i = 0;
// while (i<5) {
//     console.log("while loop running")
//     i++;
// }

// Do while loop       when you want to exucute loop atleast one time.

let i = 0;
do {
    console.log("Do wile loop is running");
    i++;
} while (i>5);        //  i use there > instead of < for showing work of do while


// forof     use to iterate over arrays , iterable objects


let arr = [2,5,2,1,9,8,7,6,5]
for(let n of arr){
    console.log("Numbers: "+n)
}


const obj = {
    name:"Ali",
    Roll:123,
    age:20
}
// forin use to iterate over object keys

for(let key in obj )

{
    console.log(key,obj[key])
}


// ternary operator
let age=20;
age>=18?console.log("You are an adult"):console.log("You are a boy")


// strict equality vs loose equality
// ==    only match values
// ===   also match type with value 

let variable = 2
let variable2 = "2"

console.log(variable == variable2)     //true because 2=2
console.log(variable === variable2)     // false beacuse 2!="2"

// conditional statements

let bill = 13;
switch (bill) {
    case 10:
        console.log("hello 1st switch")
        break;
    case 13:
        console.log("Ok right now");
        break
    default:
        break;
}

//   variables
// var     // function scoped


function newvariable() {
    {
        var a=2;
    }
    console.log(a)
}


newvariable()

function isPalindrome(str) {
    return str === str.split('').reverse().join(''); 
}





console.log(isPalindrome("malam"))





// array methods




let array = [1,2,3,4,5,6,7,8,9,10]

// .map      return a new arr by apply a function to all elements;


// console.log(array.map((a)=>a+2))

// .filter          return a new array with elements that passes the condition

console.log(array.filter((a)=>a%2==0))  // return array with even numbers
console.log(array.filter((a)=>a%2!=0))  // return array with odd numbers

// foreach    returns nothing . apply function to all elements
array.forEach(num=>console.log(num*2+"      line1\nline2"));


// .every       check all elements of array meets the condition or not
console.log(array.every((a)=>typeof(a)=="number"))   // all elements in array are numbers

 
// .find         returns the first element from array that matches the condition 
console.log(array.find((a)=>a%2==0))


// .includes      return true or false based on whether array has that element or not

console.log(array.includes((a)=>a==0))


