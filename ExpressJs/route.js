const express = require('express')
const ageValidate = require('../middleware/checkAge.js')

const app = express()

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/about",ageValidate,(req,res)=>{
    res.send("about page")
})

app.get("/profile",ageValidate,(req,res)=>{
    res.send("profile page")
})


app.listen(4000,()=>{
    console.log("seerver running");
})