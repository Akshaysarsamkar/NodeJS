//STREAM IS FLOW OF DATA OR SEQUENCE OF DATA THAT BEING MOVE FROM ONE RESOUREC TO ANOTHER OVER TIME 
//  STREAM IS AN OBJECT 

// TYPES OF STREAM 
// 1] READABLE STREAM : USED FOR READ OPERATION
let fs = require("fs")

let readablestream  = fs.createReadStream("./output.txt","utf-8")

// ADD EVENT
readablestream.on('data',chank=>{       // IT IS AN EVENT LISTENER THAT LISTENS FOR DATA EVENT 
    console.log(chank);
    
})
console.log(fs);





// WRITEABLESTREAM : USED FOR WRITE OPERATION 

let writestream = fs.createWriteStream("./write.txt","utf-8") 

readablestream.on('data',chunk=>{
    console.log("successfully run chunk");

    writestream.write(chunk,err=>{
        if (err) throw err
        console.log("successfully Written");
        console.log(chunk);
    })
    
})


let str = "i am learning node js"
writestream.write(str,err=>{
    if (err) throw err

    console.log("data written succesfully..........");
    
})