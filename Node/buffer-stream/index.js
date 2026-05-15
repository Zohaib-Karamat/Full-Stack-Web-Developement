import express from 'express';
import fs from 'fs';



const app = express();


const buffer = new Buffer("Zohaib");    // buffer is short fixed-sized memory used to handle raw binary data(understand by computer).

console.log(buffer);
console.log(buffer.toJSON());    // show hexadecimal numbers of binary. beacuse node want to not to overflow terminal with largerbinary output
console.log(buffer.toString());  // show decimal number of binary .   /////////////

buffer.write("Ali")                  //  buffer has very limited memory. SO ali replaces here first 3 letter of name Zohaib
console.log(buffer.toString());


buffer.write("karamat")          // as limited memory we cannot write more than what we have initilized
console.log(buffer.toString());




app.get("/",(req,res)=>{
    const stream = fs.createReadStream("./sample.txt","utf-8");
    stream.on("data",(chunck)=>res.write(chunck))
    stream.on("end",()=>res.end())
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})




