
// BASIC ROUTING : 

const express = require('express')
const fs = require('fs') 




const app = express()

//SIMPLE PARAMETER 
app.get('/', (req, res) => {
    res.end("<h1>Home page</h1>")
    console.log(req.method);

})
app.get('/about', (req, res) => {
    res.end("<h1>About page</h1>")
    console.log(req.method);
})



//ROUTE PARAMETER
app.get('/about/:userId', (req, res) => {
    res.send(`<h1>user ID : ${req.params.userId}</h1>`)
    res.end()
})


//OPTIONAL & MULTIPLE ROUTE PARAMETER 
app.get('/product/:productId', (req, res) => {
    res.send(`<h1>Product ID: ${req.params.productId}</h1>`)
})

// muttiple  Route Parameter
app.get('/posts/:category/:postId', (req, res) => {
    res.send(`Category: ${req.params.category}, Post ID: ${req.params.postId}`);
});


//QUERY PARAMETERS IN  EXPRESSJS
app.get('/search', (req, res) => {
    res.send(`Search Results for : ${req.params.q}`)
})


//ROUTING CHAINNG IN EXPRESS JS 
app.route('/users')
    .get((req, res) => res.send('Get method'))
    .post((req, res) => res.send('post method'))
    .put((req, res) => res.send('put method'))
    .delete((req, res) => res.send('delete method'))


// ROUTE HANDLERS IN EXPRESS JS
app.get('/insta', (res, req, next) => {
    console.log("First Handle");
    next()
}, (req, res, next) => {
    console.log('second handler');
    next()
}, (req, res) => {
    res.send("Routing handleing in express jss")
}

)

app.listen(4000, () => {
    console.log("server is running..........");
})