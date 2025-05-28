// Q1] Write a Node.js script that prints:
// OS type
// Platform
// Architecture 

const os = require('os') 

console.log("Operating Platform",os.platform());
console.log("Architecture : ", os.arch());
console.log("operating system type",os.type());


