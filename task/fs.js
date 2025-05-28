const fs = require("fs")

// Read a file asynchronously and print its content.

fs.readFile('abc.json','utf-8',(err,data)=>{

    if(err){
        console.log("error occure");
        return
    }

    console.log(data);
    
})


