// Callback Hell    = situation in javascript where callbacks are nested with other callbacks,this  make code difficult to understand and read. old way to handle asynchronus function.
// modern way to handle ->  Promises,asyn,await 



// lets have an example
function task1(callback){
    setTimeout(() => {
        
        console.log("Task 1 id completed");
        callback()
    }, 2000);
}
function task2(callback){
    setTimeout(() => {
        
        console.log("Task 2 id completed");
        callback()
    }, 1500);
}
function task3(callback){
    setTimeout(() => {
        
        console.log("Task 3 id completed");
        callback()
    }, 1000);
}
function task4(callback){
    setTimeout(() => {
        
        console.log("Task 4 id completed");
        callback();
    }, 2500);
}


//Callback hell       Nested callbacks with other callbacks
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                console.log("All tasks are completed.")
            })
        })
    })
})

