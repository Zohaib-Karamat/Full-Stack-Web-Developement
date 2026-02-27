//    Datatypes two types 


// Primitive datatypes -> that types cannot be changed
// string, number, boolean, null, undefined, symbol, bigint


// string

let a= "Zohaib";

// number
let b= 2;

// boolean
let t=true;


// undefined
let z;

// null
let score = null;

// symbol  -> The Symbol is a primitive data type in JavaScript introduced in ES6 that represents a unique and immutable identifier
let uid = Symbol("uid");

// Uniqueness: Two symbols are never equal, even if they have the same description string.

// const value1 = Symbol('description');
// const value2 = Symbol('description');
// console.log(value1 === value2); // Output: false


// bigint

let n = 324567897654345678n;




//         Quirks in JS


let number= null;
console.log(typeof(number));    // type of null datatype or null values always be a object



// primitives are immutable(means cannot be changed)
// example 
let ali = 2;
let hamza = ali;
hamza = 4;
console.log(ali)  // 2 beacuse change in b cannot make change in a. beacuse b just copied value of a during b=a;

// non-primitves
// non-primitives are mutable(means can be changed)
//objects
let object= {
    name:"ali"
}
let object2=object;
object2.name="hamza"
console.log(object.name) // hamza


// function 
function setid(id) {
    var uid = id; 
}

function Person(name) {
  this.name = name;
  console.log(name)
}

let p1 = new Person("Alice"); // user-defined object


// arrays 
let arr1 = ["arif",1,2,3]
const output = () =>{
    for(let i=0;i<arr1.length;i++)
    {
        console.log(arr1[i]);
    }
}
output()
