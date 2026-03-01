// Objects    JavaScript objects are the backbone of data in both JS and React — used for props, state, configuration, API responses, and more.

// import { use } from "react"

// And destructuring is the clean, modern way to extract data from them — used everywhere in React.

// An object is is collection of key-value pairs.

const user = {
    name: "Ali",
    age: 20,
    isActive: true 
}

// Access values 
// accessing the objects can be in two ways 

// 1.  using dot notation
console.log(user.name)
// 1.  using bracket notation
console.log(user["age"]+ "  " + user["name"])


// update values 

user.age = 25;
console.log("Updated Age: "+user.age);

// 🧠 2. Nested Objects

const post = {
    title: "React.js",
    author: {
        id: 1,
        name : "Ali"
    }
}

console.log(post.author.name)


// 🔓 3. Destructuring Objects

// instead of using

// const name = user.name;
// const age = user.age;


// use destructuring

const { name,age } = user;
console.log("Name: "+name + " Age: " + age)



// you can even rename 
const {name:username } = user;
console.log("Username: "+ username)
console.log(`Username: ${username}`)   // template literal

// 📦 4. Destructuring Function Parameters

// This is super common in React:

function greet({name})
{
    console.log(`Welcome user: ${name}`)
}
const person = {name:"Hamza",age:"20"}
greet(person)


// In React:

// function Button({ label, onClick }) {
//   return <button onClick={onClick}>{label}</button>;
// }


const nums = [10,20,30]

const [a,b] = nums;

console.log("A: "+a+"  B: "+b )

const [,,third] = nums;
console.log("Third Number : "+ third)


