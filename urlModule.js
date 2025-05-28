// // url module used to split ip web address into readable parts 

// const { log } = require("console")
// const url = require("url")

// const reqobj = 'http://localhost:9000/user?country=india&city=delhi#mumbai'

// const urlobj = url.parse(reqobj)

// console.log(urlobj);

// //1] HASH : USED TO SET & GET FRAGEMENT PORTION OF URL 
// console.log(urlobj.hash);

// // 2] HOST : USED TO SET OR GET HOST PORTION OF A URL 
// console.log(urlobj.host)

// // 3] HOSTNAMES: USE TO SET OR GET THE HOSTNAME PORTION OF URL 
// console.log(urlobj.hostname);

// // 4]protocol : USED TO SET OR GET THE PROTOCOL OF URL 
// console.log(urlobj.protocol);

// // 5] USED TO SET OR GET THE SEARCH PORTION OF URL
// console.log(urlobj.search);

// // 6] href: UE TO SET OR GET HREF OF URL 
// console.log(urlobj.href);


// console.log(reqobj.toString());



// // example of url module with http and 

// import url from 'url'
// import http from 'http'
// import fs from 'fs'




// const server = http.createServer((req,res)=>{

//     const urlobj = url.parse(req.url)
//     console.log((urlobj));
    

//     const fn = "."+urlobj.pathname

//     console.log(fn);
    

//     fs.readFile(fn,(err,data)=>{
       
//         res.setHeader('content-type','text/html')  
    
          
//         res.end(data)   
//     })

// })
// server.listen(5000,()=>{
//     console.log("server is running........");
    
// })





