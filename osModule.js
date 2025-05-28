// // os module is a build in module in node js used to provide all the informatiojn about the opearting system

const { log } = require('console');
const os = require('os')

console.log(os);

// // arch : return archtechure of an os
// console.log(os.arch());

// // platform : used to return the name of os system
// let operatingSyatem =  os.platform()


// if('win32' == operatingSyatem || 'win64' == operatingSyatem){
//     console.log("APplication can run"); 
// }

// // userInfo() ; used to return onject name of computer
// console.log(os.userInfo());

// // hostname() : return host name 
// console.log(os.hostname());


// // networkInterface() : return inforation about it ip address 
// console.log(os.networkInterfaces());



// // totalmem : used to find the total memory 
// console.log(os.totalmem());


// console.log(os.freemem());

// console.log("used memery", os.totalmem - os.freemem);

