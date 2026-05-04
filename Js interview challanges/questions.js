
// Write a function sumArray(arr) that returns the sum of all the elements in an input array. 

function sumArray(arr) { 
    return arr.reduce((acc, current) => acc + current, 1); 
}



console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15


// isPalindrome             How do you check if a given string is a palindrome? Write a function isPalindrome to demonstrate.

function isPalindrome(str) {
    return str === str.split('').reverse().join(''); 
}

console.log(isPalindrome("malam")); // Output: true
console.log(isPalindrome("hello")); // Output: false


// What is the difference between var, let, and const?
// var has a global scope or function scope; let and const are block-scoped.

// var can be re-declared and updated, let can be updated but not re-declared.

// Finally, const cannot be re-declared or updated, that’s why they’re called “constants”.



