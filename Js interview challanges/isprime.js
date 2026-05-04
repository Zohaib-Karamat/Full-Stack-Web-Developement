// // prime numbers logic 
// 1. check number should be > 1  if its not its not prime 
// 2. Check divisibility from 2 to n-1
// 3. if any number completely divides n  ,  means n%number===0   means not prime
// 4. otherwise number is prime


function isprime(n) {
    // check number should be > 1  if its not its not prime 
    if(n<=1){
        return false;
    }

    // Check divisibility from 2 to n-1 
    for(let i=2;i<=n-1; i++){
        // if any number completely divides n  ,  means n%number===0   means not prime
        if(n%i === 0){
            console.log(`Factor which completely divides the number: ${i}`)
            return false;
        }
    }
    return true;

}


console.log(`Is Prime: ${isprime(36)}`)
console.log(`Is Prime: ${isprime(5)}`)
console.log(`Is Prime: ${isprime(10)}`)