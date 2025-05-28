const url = require('url')


// Q1] Use the url.parse() method or the WHATWG URL class.

const myUrl = 'https://example.com:8080/products?page=2&category=books';
const parseUrl = url.parse(myUrl)
console.log(parseUrl);
console.log(`protocol =====> ${parseUrl.protocol}`);
console.log(`query =====> ${parseUrl.query}`);
console.log(`Host =====> ${parseUrl.host}`);
console.log(`hostName =====> ${parseUrl.hostname}`);
console.log(`Search =====> ${parseUrl.search}`);
console.log(`Port =====> ${parseUrl.port}`);


//Q2] Extract the value of a query parameter from a URL.
let Example = "https://example.com/search?term=nodejs"
console.log(url.parse(Example).query);

// Q3]Check if a given string is a valid URL. Try using a try...catch block with the URL constructor.

let isvalidUrl = (input)=>{
    try {
         new URL(input)
         return true
    } catch (error) {
        return false
    }
}
console.log(isvalidUrl("https://www.google.com"));
console.log(isvalidUrl("ftp://localhost:21/file"));
console.log(isvalidUrl("http/badurl"));

// Q4] Modify a query parameter in an existing URL and print the new URL.
let newUrl = url.parse(Example).query = "term=reactJs"













