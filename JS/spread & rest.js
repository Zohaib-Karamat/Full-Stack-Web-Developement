// 🔥 Day 11 — Spread (...) & Rest (...) Operators

// These two powerful features use the same ... syntax, but their meaning depends on context.

// They're heavily used in React:

// Spread: passing props, cloning objects

// Rest: collecting props, handling arguments


// ✅ 1. Spread Operator (...)

// use to spread arrays and objects 

// in arrays
const array = [1,2,3]
const arr1 = [...array,3,4,5] 
console.log(arr1)

// in obejcts

const object = {
    name : "Ali",age: 20
}
const object2 = {
    ...object, id:1
}

console.log(object2)


//in React 
// const props = { id: 1, name: "Ali" };
// <Component {...props} />;



// ✅ 2. Rest Operator (...)

// 📌 Collect multiple values into one array or object.

// in functions

function sum(...nums) {
    return nums.reduce((acc,num)=>acc+num,0)
}

console.log(sum(1,2,3,4))

// ➤ In Destructuring

const newobject = {
    a:1,b:2,c:3,d:4
}

const {a,...rest} = newobject
console.log("a: "+a)
console.log(rest)


// 🔍 Summary: Spread vs Rest
// | Feature | Spread                          | Rest                               |
// | ------- | ------------------------------- | ---------------------------------- |
// | Purpose | Expand items                    | Gather items                       |
// | Where?  | Arrays, objects, function calls | Arrays, objects, function params   |
// | Example | `[...arr]`                      | `function(...args)` or `{...rest}` |
