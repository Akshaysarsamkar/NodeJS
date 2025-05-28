// GLOBAL OBJECT : IT IS GLOBAL OBJECT ACCESSIBLE IN APPLICATION FROM ABY WHERE WITHOUT IMPORT 


// 1] __DIRNAME: RETURN THE DIRECTORY NAME WHERE CURRENT CODE IS PLACED  RETURN ABSOLUTE PATH
console.log("Directory name is ---------->  ", __dirname)


// 2] __filename : return the file name of code being executed RETURN ABSOLUTE PATH
console.log("file name:  ", __filename);

// 3]console.log :  for standart print function 
// A]console.log()
console.log("Hello how are You");

// B] console.error()
console.error("Error mssage")

// C] console.warn()
console.warn("console.warn object")

// D] console.table 
console.table([["Akshay", "Sandip", "Sam", "Suraj", "Dhiraj"], [1, 2, 3, 4, 5]])

// E] timeEnd
console.timeEnd("8")


//PROCESS : IT IS GLOBAL OBJECT USED TO GET INFOERMATION ABOUT THE CURRENT RUNNING NODEJS PROCESS
// console.log(process)
console.log(process.pid);
console.log(process.version);
console.log(process.ppid);

// BUFFER 
let buffer = Buffer.from("Akshay")
console.log(buffer);



const { time } = require("console");
// import other file using require
const dt = require("./FirstNode.js")
console.log(dt.add());









