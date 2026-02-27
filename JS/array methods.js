const nums = [1, 2, 3];

// ✅ 1. .forEach()

// Executes a function for each element in the array. (Doesn't return anything.)
nums.forEach(num=>console.log(num*2));



// ✅ 2. .map()    Creates a new array by applying a function to each item.
const newarray = nums.map(num=>num**3)
console.log(newarray)
// example of use in REACT 
// users.map(user=><UserCard key={user.id} data={user}/>)

// ✅ 3. .filter()  Creates a new array with only elements that pass a condition.
let numbers = [2,4,5,7,8]
let newnumber = numbers.filter(num=>num%2!=0)
console.log(newnumber)


// ✅ 4. .find()  Return the first item that matches the condition.
const arrayofobjects = [
    {name:"ali",age:20},
    {name:"abdullah",age:21},
    {name:"alice",age:20}
]
let find=arrayofobjects.find(age => age.age ==20 )
console.log(find)