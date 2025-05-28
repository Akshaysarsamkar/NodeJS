import http from 'http'
import fs from 'fs'
import { log } from 'console'
// // server created
// const server = http.createServer((req,res)=>{
//     res.end("hello how are you")
//     console.log("Server Created........");
// })

// // server running 
// server.listen(5000,err=>{
//     if (err) throw err 
//     console.log("server running on Port 5000 .....");
// })



// Short way to create server 
// http.createServer((req,res)=>{
//     res.end("Learn node js")
// }).listen(4000,err=> console.log(err,"server is running........."))


// EXAMPLE 3 : work with different url
// const server = http.createServer((req, res) => {


//     if (req.url === "/about") {
//         res.write("<h1>About Page</h1>")
//         res.end()
//         return
//     }

//     if (req.url === "/carrer") {
//         res.write("<h1>Carrer Page</h1>")
//         res.end()
//         return
//     }


//     res.write("<h1>Server is created</h1>")
//     res.end()

// }).listen(4000, err => console.log("server running............"))



//GET METHOD 
// http.createServer((req, res) => {

//     // set header 
//     res.setHeader("Content-type", "text/html")

//     if (req.url === "/" || req.url === "") {
//         fs.readFile("./index.html", "utf-8", (err, data) => {
//             if (err) throw err
//             res.end(data)

//             console.log(req.url);

//         })
//     }

//     if (req.url === "/about") {
//         fs.readFile("./about.htm", "utf-8", (err, data) => {
//             if (err) throw err
//             res.end(data)
//             console.log(req.url);

//         })
//     }

// }).listen(5000, err => console.log("Server running"))



//TO SERVE API

// http.createServer((req, res) => {

//     // create the array object 
//     let emp = [
//         {
//            name:"Akshay",
//            salary:"5000",
//            id:1
//         },

//         {
//            name:"Karan",
//            salary:"5000",
//            id:23
//         },

//         {
//            name:"Sam",
//            salary:"8000",
//            id:15
//         },
//     ]
//     res.setHeader("Content-type", "application/json") //  setHeader 
//     res.end(JSON.stringify(emp)) // convert OBJ into the Json  


// }).listen(5000,err=>{
//     if(err)
//         throw err 

//     console.log("Server is running............");

// }) 



// To Render audio and video

//     res.setHeader("Content-type", "video/mp4")
//     let video = fs.readFileSync("vi.mp4")

//     res.send(video)

// }).listen(4000, err => console.log("server running.........."))
