//     IF -ELSE
let age = 18;

// if (age >= 18) {
//     console.log("Adult");
// } else if (age >= 13) {
//     console.log("Teenager");
// } else {
//     console.log("Child");
// }


// Switch stsatements
switch(true){
    case (age>=18):
        console.log("Adult");
        break;
    case (age<18):
        console.log("teenage");
        break;
    default: 
        console.log("Unknown")
}


// ternary operator
let isLoggedIn = true;
let message = isLoggedIn==true?"Welcome Back!":"Please login in";
console.log(message)



// 🔸 4. Truthy and Falsy Values

// In JS, these values behave like false in conditionals:

// false

// 0

// "" (empty string)

// null

// undefined

// NaN



if ("") {
  console.log("Won't run");
} else {
  console.log("This will run");
}


// Real Use in React

{user ? <Profile/>:<Login/> }
// Same as:

if (user) {
  return <Profile />;
} else {
  return <Login />;
}