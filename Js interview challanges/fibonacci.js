// Fibonacci series 



function Fibonacci(n) {
    if(n<=1){
        return n;
    }
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        console.log(a);
        let next = a+b;
        a=b;
        b=next;
    }
    return b; // fibanocci number
}


// console.log(Fibonacci(6))




// using recursion 

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}


console.log(fib(7))