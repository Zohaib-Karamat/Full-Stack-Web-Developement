// Callbacks & Higher-Order Functions

// ✅ 1. Callback Functions
// A function is passed as an argument to other function 


// Example Simpler
function greet(name){
    console.log(`Welcome User! ${name}`)
}

function process(Callback) {
    const name = "Faisal";
    Callback(name);
}

process(greet);   //greet here a callback function


// ✅ 2. Higher-Order Functions

// A higher-order function (HOF) is a function that either:

// Takes one or more functions as arguments, OR

// Returns a function

// means in the above example process function is the high order function.

// Examples: .map(), .filter(), .reduce() — all are HOFs.

const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]


// another example
function Multiplier(factor) {
    return function(num){
        return num * factor;
    }
    
}
const output = Multiplier(2);
console.log(output(5))



// 🔁 Real React Use Case
// <button onClick={() => handleClick("clicked!")}>Click</button>

// Here, handleClick is used as a callback for the onClick event.



