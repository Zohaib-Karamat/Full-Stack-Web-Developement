// Variables


//Hoisting
// Var -> Hoisted -> Undefined
// Let -> Hoisted -> Refrence Error beacuse of nothing value
// Const -> hoisted -> refrence Error beacuse of nothing value 



//     Var -> Function scoped, can be redeclared

var a=2;
{
    var a=4;
}
console.log(a)


//     Let -> block scoped , cannot be redeclared, can be reinitialized

let b=3;
console.log(b)

//     Let -> block scoped , cannot be redeclared,  cannot be reinitialized

const c=1;
console.log(c)