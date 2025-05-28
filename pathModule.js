// path is a build in module in node js used to provides utilities for work with file and directory path 

const path = require("path")

// console.log(path);


// 1]BASENAME : RETURN LAST PORTION OF PATH 
console.log(path.basename(__filename));
console.log(path.basename(__dirname));


// 2] DIRNAME : RETURN DIRECTORY NAME 
console.log(path.dirname(__dirname));


// 3] extname: return extention of path 
console.log(path.extname(__filename));


// 4] join : used to segement all path together using seperator
console.log(path.join(__filename,"/","index.php"));


// 5] normalize : normilize given path used normalize method 
console.log(path.normalize(__filename));

//6] resolve : used to resolve the absolute path 
console.log(path.resolve("baout.html../..../..."));


// 7] isAbsolute : return true if path is absulute 
console.log(path.isAbsolute(__dirname));




