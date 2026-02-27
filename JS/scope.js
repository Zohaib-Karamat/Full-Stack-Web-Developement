// 🧱 1. Global Scope

// Variables declared outside any function or block.

let color = "blue";

function showColor() {
  console.log(color); // Accessible
}
// 🔁 2. Function Scope

// Variables declared with var inside a function are only accessible within that function.

function greet() {
  var message = "Hello";
  console.log(message); // OK
}
console.log(message); // ❌ Error
// 📦 3. Block Scope (let & const)

// Variables declared with let or const are limited to the block {} in which they are defined.

if (true) {
  let x = 10;
  const y = 20;
}
console.log(x); // ❌ Error
// 🧠 4. Lexical Scope

// Functions in JS are lexically scoped, meaning they look outward to where they were defined, not where they were called.

function outer() {
  let count = 0;
  function inner() {
    console.log(count); // Can access outer's count
  }
  inner();
}
// 🚫 Common Mistakes

// Mixing var, let, and const without understanding their scope rules

// Trying to access block-scoped variables outside their block

// Forgetting that functions remember the environment where they were created

// ✅ Quick Comparison Table
// Scope Type	Declared With	Accessible In
// Global Scope	anywhere	Whole program
// Function Scope	var	Only inside that function
// Block Scope	let, const	Inside {} block
// Lexical Scope	Functions	Outer (parent) scopes