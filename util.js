// util is build in module is node js used to provide helper functions that make easy to work with debug , object and asynchrous code 

const { log } = require('console');
const util = require('util')

// 1] format : used to format string same like as printf in c
let str = util.format("my name is %s i work in %s and earning %i", "AkshayKumar", "IBM", 45200)
console.log(str);


// 2] inspect  return string represenattion of an object useful for debuging purpose 
let obj = {
    name: "Akshay",
    salary: 45220,
    id: 45,
    adds: "pune"
}
const s = util.inspect(obj, { depth: null, colors: true, breakLength: true })
console.log(s);




// 3] types : contains type checking functions like isDate,isPromise,isRegExp etc.........
let p = new Promise((rel, rej) => {
    console.log(rel, rej);

}).then(console.log("resolve")).catch(console.log("rej"))


console.log(util.types.isDate(new Date()));
console.log(util.types.isKeyObject(obj));
console.log(util.types.isPromise(p));



// 4]  promisify :  used to convert callback based funcion to promise 

const fs = require("fs")
const readfile = util.promisify(fs.readFile)
readfile("new.txt",'utf-8').then(console.log("Hello")).catch(console.log("by"))
