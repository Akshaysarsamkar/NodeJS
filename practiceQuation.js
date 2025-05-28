// Q1] Write a Node.js script using the http module to create a server that responds with “Hello World” on the browser.

const { log } = require('console');
const http = require('http')

// const server =http.createServer((req,res)=>{
//     console.log(req);
//     console.log(res);
//     res.end()


// })

// server.listen(4000,()=>{
//     console.log("server running........");

// })


// Q2] Create a server that returns:

// "Home Page" for /

// "About Page" for /about

// "404 Page Not Found" for any other route


// const server = http.createServer((req, res) => {

//     let { url, method } = req

//     console.log(url);

//     if (method === 'GET') {
//         console.log("get method");

//         if (url === "/") {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write("<h2>this is a Home page</h2>")
//             res.end()
//         }
//         else if (url === "/about") {
//             res.writeHead(200, { 'content-type': 'text/html' })
//             res.write("<h2>this is a About Page</h2>")
//             res.end()
//         }
//         else{
//             res.writeHead(404,{'content-type':'text/html'})
//           res.write("<h2>PAge Not found!!</h2>")
//           res.end()
//         }

//     }
// }).listen(4000)





// Q3] Create a server that returns a JSON response with user details when the /user route is accessed.

const server = http.createServer((req,res)=>{

    let emp = [
        {
            name:"sam",
            age:"48"
        },
        {
            name:"raju",
            age:"25"
        },
        {
            name:"ram",
            age:"40"
        },
    ]
    res.writeHead(200,{'content-type':'application/json'})
    res.write(JSON.stringify(emp))
    res.end()
}).listen(4000,()=>{
    console.log("server is running");
    
})