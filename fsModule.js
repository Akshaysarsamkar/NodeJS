//FS USED TO WORK WITH FILE IN YOUR SYSTEM 

// two ways to work with fs 
//    1] asychronuous
//    2] synchronuous

// const { log } = require("console")
const { log } = require("console")
const fs = require("fs")

// read file using synchronuous
// let readdata = fs.readFileSync("write.txt")
// console.log(readdata.toString())
// console.log("Data read succesfully.......");


// read file using asynchronuous
// fs.readFile("write.txt",(err,data)=>{
//     if(err) throw err 
//     console.log("Fetch data is : ",data.toString());
//     console.log("data fetch sucessfully"); 
// })
// console.log("operation done");



// WRITING DATA IN FILE 
//  Write file using synchronuous 
let p = "i clrear my intervirew and now i want to learn Nodejs"
fs.writeFileSync("output.txt",p)
console.log("write data sucessfully...........");



//  Write file using asynchronuous 
// fs.writeFile("output.txt","hello hi how are you",(e)=>{
//     if(e) throw e 
//     console.log("data write sucessfully........");
// })
// console.log("done........");




// //CREATE DIRECTORY USING synchronuous 

if (!fs.existsSync("Qspider")) {
    let dir = fs.mkdirSync("Qspider")
    console.log(dir);
    console.log("folder Created succefully");
} else {
    console.log("folder Already exits...........");
}




// //CREATE DIRECTORY USING asynchronuous 

// try {

//     fs.mkdir("qspider1", (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log("Directory created...");

//     })

// } catch (error) {
//     console.error("folder Already exits...........", error);
// }



//REMOVE THE FILE USING synchronuous 
// fs.unlinkSync("write.txt")
// console.log("deleted sucessfuly........");

// //REMOVE THE FILE USING asynchronuous 
// fs.unlink("./qspider/abc.txt",(err)=>{
//    if(err)
//     throw err

//    console.log("file deleted succesfully........");

// })

// console.log("done!!");





// REMOVE DIRECTORY USING synchronuous 
// fs.rmdirSync("Qspider")
// console.log("deleted succesfuly..");


// // REMOVE DIRECTORY USING asynchronuous 
// fs.rmdir("qspider1",(err)=>{
//     if (err){
//         console.log("Error occure..")
//         return 
//     }

//     console.log("deleted............");

// })

// console.log("done.........");



// //RENAME FILE synchronuous 
// fs.renameSync("output.txt","new.txt")


//RENAME FILE asynchronuous 

// fs.rename("new.txt", "new1.txt", (e) => {
//     if (e) throw e

//     console.log("rename done.........");

// }) 



// APPEND THE CONTENT INSIDE THE USING synchronuous 
// fs.appendFileSync("new.txt","util not i learn basic function of FS module")
// console.log("data append succefully...");


// APPEND THE CONTENT INSIDE THE USING asynchronuous 

// fs.appendFile("new1.txt","hello hi how are youlearn appendfile function using asynchronuous",(e)=>{
//     if(e)
//     {
//         console.log("error............");
        
//     }

//     console.log("Data will be added.......");
    
// })

// console.log("operation done......");



