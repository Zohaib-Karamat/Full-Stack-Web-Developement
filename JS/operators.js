// Operators
let a = 5;
let b = 2;
// +   // Addition
console.log(a+b)
// *   // Multiplication
console.log(a*b)
// /   // Division
console.log(a/b)
// %   // Modulus (remainder)
console.log(a%b)
// **  // Exponentiation
console.log(a**b)
// ++  // Increment
console.log(++b)
// --  // Decrement
console.log(--b);


//assignment operators
// =     // Assign
a=b;
// +=    // Add and assign
a+=b;
// -=    // Subtract and assign
a-=b;
// *=    // Multiply and assign
a*=b;
// /=    // Divide and assign
a/=b;



//  Comparison operators 

// ==    // Loose equality (type coercion)
         console.log(2=='2') // only match value
// ===   // Strict equality (no type coercion)
        console.log(2==='2') // match value as well as type
// !=    // Loose inequality
        console.log(2!='2')
// !==   // Strict inequality
        console.log(2!=='2')
// >     // Greater than
// <     // Less than
// >=    // Greater than or equal
// <=    // Less than or equal




// 4. Logical Operators

// Used with booleans (for conditions):

// &&    // Logical AND

// ||    // Logical OR
// !     // Logical NOT

let first = true;
let second = false;

console.log(first && second); // false
console.log(first || second); // true
console.log(!first);     // false


// 5. Other Useful Operators

// Ternary Operator: a shorthand for if...else

let age = 18;
let result = age >= 18 ? "You are an adult" : "chota he to abi";
console.log(result)


// delete Operator: removes property from object

let objects = {
    naam: "obj",
    id:3
}
delete objects.naam;
console.log(objects)


// typeof Operator: checks type of variable

console.log(typeof "hello"); // string
console.log(typeof null); // object 


