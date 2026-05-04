// palindrome      means "ama" = "ama"   if we reverse a string then check if it will be equal to real one that is palindrome.





function isPalindrome(str) {
    return str === str.split("").reverse("").join("")
}



console.log(isPalindrome("ali"))
console.log(isPalindrome("ama"))