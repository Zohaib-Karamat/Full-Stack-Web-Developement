// 5️⃣ Loops

// for     use when number of iterations are known
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// while    use when number of iterations are unknown
let i = 0;
while (i > 5) {
    console.log(i);
    i++;
}
// do while      use when you want to run the code atleast one times, even if condition false 
do {
    console.log(i);
    i++;
} while (i > 5)

// for...of (arrays)    Use to iterate arrays or iterable objects
const nums =[100,200,300];
for (let num of nums) {
    console.log(num)
}

// for...in (objects)     Used to iterate over object keys
const user = {
    name:"ALi",
    age: 20
}
for (let naam in user) {
    console.log(naam,user[naam]);
}
// ✅ 6. break and continue (Control Flow)

// break → exits the loop entirely

// continue → skips the current iteration

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

const square = (x) => x * x;
square(2);


const add = (a, b) => a + b;