
console.log("Hi!");

setTimeout(function newtimeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");

let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let status = true;
    if(status){
        resolve("Chal gaya kam");
    }
    else{
        reject("nahi chala kam");
    }
    },5000);
    
});

pr.then((data)=>console.log(data)).catch((err)=>{console.log(err)});


