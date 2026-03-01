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


const homenames = [
    {
        name: "person 1",
        id: 1
    },
    {
        name: "person 2",
        id: 1
    }
]



const person = homenames.find(id => id.id==1)
console.log(person)


// ✅ 5. .reduce()   condenses an array to single value

const newnumbers = [1,2,3,4]
const sum = newnumbers.reduce((acc,num)=>acc+num,0)
console.log("Reduce output: " + sum)

// ✅ 6. .some() / .every()  both will return true or false
// .some() will check if any item passes a test or condition 
// .every() will check if all items passes a test or condition 

console.log("Some() output: " + newnumbers.some(num=>num>3))
console.log("Every() output: " + newnumbers.every(num=>num==1))

// ✅ 7. .includes()   Check if a value in array or not (true/false)

console.log("Includes() output : " + newnumbers.includes(0))

// 6. .sort()   Modifies the original array!
const array = [90,20,30,10]
array.sort()    // acsending order
console.log("acsending: " + array)


// for decsending order
array.sort((a,b)=>b-a)
console.log("decsending: " + array)