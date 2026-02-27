// 🧩 What Is a Closure?

// A closure is created when a function "remembers" and has access to variables from its outer scope, even after the outer function has finished executing.


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



// try this one  
function Multiply(factor)
{
    return function(num)
    {
        return num * factor;
    };
}

const run = Multiply(2);
console.log(run(5))