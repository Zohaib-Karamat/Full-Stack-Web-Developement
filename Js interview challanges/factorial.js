// factorial means  5! = 5*4*3*2*1 = 120 Output



// Recursive function
// A recursive function is one that calls itself 

function factorial(n) {
    if(n === 0) return 1;
    return n*factorial(n-1);
}



console.log(factorial(5))