
// string decoder : used to decode the buffer infon string 
const sd = require("string_decoder")

console.log(sd);

const decoder = new sd.StringDecoder("utf-8")
const buffer = new Buffer.from("this is node js poject")
console.log(decoder.write(buffer))


// query String : used to provide the utilities for formating the url query string 
const url = require('url')
const qs = require('querystring');
const { log } = require("console");

let exampleUrl ="localhost:4000?name=akshay&id=12&add=pune"

let urlParse = url.parse(exampleUrl)
console.log(urlParse);

let query = qs.parse(urlParse.query)
console.log(query);

console.log("Name of emp ",query.name);
console.log("id of emp ",query.id);
console.log("address of emp",query.add);




