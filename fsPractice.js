// Q1] WRITE A NODE SCRIPT TO READ THE CONTENTS OF A FILE CALLED DATA.TXT ASYNCHRONOUSLY 

// import FS from 'fs'

// FS.readFile("data.txt",(err,data)=>{
//    if(err) throw err 

//    console.log(data.toString());
//    console.log("Data read succesfully..........");
// })

// console.log("read operation done");



// Q2]  HOW WOULD YOU WRITE HELLO AKSHAY! TO FILE NAME GRETTING  
// const fs = require("fs")
// let data = "hello Akshay!"
// fs.writeFileSync("greeting.txt",data)


// Q3] HOW YOU CHECK IS FILE LOG.TXT EXISTS 

// import { log } from 'console';
// import fs from 'fs'

// if(fs.existsSync(log.txt)){
//     console.log("log.txt file already exist");
    
// }
// else{
//     console.log("Not exist..");
    
// }



// Q4] DELETE THE FILE greeting.txt USING FS MODULE 

// const fs = require("fs")
// fs.unlinkSync("greeting.txt")
// console.log("file deleted.");


// Q5] 
