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
} while (i > 5);        //  i use there > instead of < for showing work of do while


// forof     use to iterate over arrays , iterable objects


let arr = [2, 5, 2, 1, 9, 8, 7, 6, 5]
for (let n of arr) {
    console.log("Numbers: " + n)
}


const obj = {
    name: "Ali",
    Roll: 123,
    age: 20
}
// forin use to iterate over object keys

for (let key in obj) {
    console.log(key, obj[key])
}


// ternary operator
let age = 20;
age >= 18 ? console.log("You are an adult") : console.log("You are a boy")


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
        var a = 2;
    }
    console.log(a)
}


newvariable()

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}





console.log(isPalindrome("malam"))





// array methods




let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// .map      return a new arr by apply a function to all elements;


// console.log(array.map((a)=>a+2))

// .filter          return a new array with elements that passes the condition

console.log(array.filter((a) => a % 2 == 0))  // return array with even numbers
console.log(array.filter((a) => a % 2 != 0))  // return array with odd numbers

// foreach    returns nothing . apply function to all elements
array.forEach(num => console.log(num * 2 + "      line1\nline2"));


// .every       check all elements of array meets the condition or not
console.log(array.every((a) => typeof (a) == "number"))   // all elements in array are numbers


// .find         returns the first element from array that matches the condition 
console.log(array.find((a) => a % 2 == 0))


// .includes      return true or false based on whether array has that element or not

console.log(array.includes((a) => a == 0))

// spread and rest operator

// spread is used to spread data , passing props, spread arrays and objects 

let obj1 = {
    a: "1",
    b: "2",
    c: "3",
    d: "4"
}


let obj2 = {
    ...obj1,
    f: "9"
}

for (let a in obj2) {
    console.log(a, obj2[a])
}


// rest is collecting multiple data means collection props,

// in function 
function even(...arr) {
    return arr.filter((a) => a % 2 == 0);
}


console.log(even(1, 2, 3, 4))



// object and destructuring 
let object3 = {
    id: 1,
    name: "Ali",
    age: "20"
}

// accessing the object
console.log(object3.name);
console.log(object3["name"]);


// destructuring

// instead of 


//use

let { newAge } = object3;


// callback     introduced to handle asynchronus functions or tasks

function greeting(s) {
    console.log("Welcome User: " + s);
}
function Welcome(callback, name) {
    callback(name)
}

Welcome(greeting, "Ali")


// callback hell
function task1(callback) {
    setTimeout(() => {

        console.log("Task 1 id completed");
        callback();
    }, 2000);
}
function task2(callback) {
    setTimeout(() => {

        console.log("Task 2 id completed");
        callback();
    }, 1500);
}
function task3(callback) {
    setTimeout(() => {

        console.log("Task 3 id completed");
        callback();
    }, 3000);
}
function task4(callback) {
    setTimeout(() => {

        console.log("Task 4 id completed");
        callback();
    }, 2500);
}

// callback makes code difficult to read and maintain.that is callback hell or pyramid of dom
// task1(
//     () => {
//         task2(() => {
//             task3(()=>{
//                 task4(()=>{
//                     console.log("All tasks are completed")
//                 })
//             })
//         })
//     }
// )


// Promises     promises are javascript objects that represents output of an async function 




// function fetchData()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let success = true;
//             if(success){
//                 resolve("Received")
//             }
//             else{
//                 reject("Not Received")
//             }
//         },2000)
//     })
// }


// fetchData().then(data=>console.log(data)).catch(error=>console.log(error))



//  async await   


function fetchData() {
    return new Promise((resolve, reject) => {

        let success = true;
        if (success) {
            resolve("Received")
        }
        else {
            reject("Not Received")
        }

    })
}


async function getData() {
    let data = await fetchData();
    console.log(data);
}


getData()













//////            Event Loop

//     The event loop is where most juniors get confused because they memorize “async happens later” without understanding how. Let’s make it simple and practical.

// 🧠 What is Event Loop?

// JavaScript is single-threaded → it can do one thing at a time.

// So how does it handle async tasks like:

// setTimeout
// fetch
// Promises

// 👉 That’s where the event loop comes in.

// It manages:

// Call Stack
// Callback Queue (Macrotasks)
// Microtask Queue (Promises)
// ⚙️ Core Components
// 1. Call Stack

// Where code executes line by line.

// 2. Web APIs (Browser / Node)

// Async tasks are handled here:

// setTimeout
// fetch
// DOM events
// 3. Callback Queue (Macrotask Queue)

// Stores callbacks of:

// setTimeout
// setInterval
// DOM events
// 4. Microtask Queue (Higher Priority ⚡)

// Stores:

// Promise.then()
// catch
// finally
// 🔁 How Event Loop Works (Step-by-Step)
// Run code from Call Stack
// If async task comes → send to Web APIs
// When done → callback goes to:
// Microtask Queue (Promises)
// OR Callback Queue (setTimeout)
// Event loop checks:
// Is Call Stack empty?
// If yes → first run Microtasks
// Then run Macrotasks
// ⚡ Important Rule (Very Important)

// 👉 Microtasks run BEFORE macrotasks

// 🔥 Example (Must Understand)
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");
// ✅ Output:
// Start
// End
// Promise
// Timeout
// 🧠 Why This Happens
// "Start" → runs (call stack)
// setTimeout → goes to Web API → then Callback Queue
// Promise → goes to Microtask Queue
// "End" → runs

// Now stack is empty 👇

// Event loop runs Microtasks first
// → "Promise"
// Then runs Macrotasks
// → "Timeout"
// 🔁 Visual Flow (Simple)
// Call Stack → Empty?
//    ↓ YES
// Microtasks Queue → Run ALL
//    ↓
// Macrotask Queue → Run ONE
//    ↓
// Repeat
// 🚫 Common Mistakes (Interview Traps)
// Thinking setTimeout(..., 0) runs immediately ❌
// Ignoring microtask priority ❌
// Not knowing Promises are faster than setTimeout ❌
// 🎯 Interview One-Liner

// If they ask you in interview, say:

// 👉 “JavaScript uses an event loop to handle asynchronous operations. It executes synchronous code first, then processes microtasks like Promises, and finally macrotasks like setTimeout.”








//                Closures        
// closure in javascript means inner function remembers the value of outer function even after the outer function stops executing


function outer(){
    let count = 0;
    return function inner(){
        count++;
        console.log(count)
    }
}

const counter = outer(); // outer runs once
counter(); // 1
counter(); // 2


