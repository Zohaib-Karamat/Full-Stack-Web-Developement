import { create } from "domain";
import fs from "fs/promises";
import { createServer } from "http";

// READ FILE
async function readFileData() {
  try {
    const data = await fs.readFile("./files/test.txt", "utf-8");

    console.log("File Content:");
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

// WRITE FILE
async function writeFileData() {
  try {
    await fs.writeFile(
      "./files/write.txt",
      "This file is created by Node.js"
    );

    console.log("write.txt created successfully");
  } catch (error) {
    console.log(error.message);
  }
}

// APPEND FILE
async function appendFileData() {
  try {
    await fs.appendFile(
      "./files/write.txt",
      "\nNew line added using appendFile"
    );

    console.log("Content appended");
  } catch (error) {
    console.log(error.message);
  }
}

// RENAME FILE
async function renameFileData() {
  try {
    await fs.rename(
      "./files/write.txt",
      "./files/newWrite.txt"
    );

    console.log("File renamed");
  } catch (error) {
    console.log(error.message);
  }
}

// DELETE FILE
async function deleteFileData() {
  try {
    await fs.unlink("./files/newWrite.txt");

    console.log("File deleted");
  } catch (error) {
    console.log(error.message);
  }
}

// RUN ALL FUNCTIONS
async function start() {
  await readFileData();

  await writeFileData();

  await appendFileData();

  await renameFileData();

  await deleteFileData();
}

start();
const hostname = '127.0.0.1';
const port = 3000;

const app = createServer((req,res)=>{
    res.statusCode = 200;
    res.end("Hello World. Welcome to First Node Project");

})


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});