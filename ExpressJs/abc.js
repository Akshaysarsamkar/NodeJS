const express = require('express')

const app = express()


// Application level middleware : the middle ware which use for whole application is called as application level Middle ware 

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})
app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1>Application Level Middleware</h1>
            <h5>Middleware</h5>
        </div>
        `)
})


app.use('/admin', (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next()
})


app.get('/admin/dashboards', (req, res) => {
    res.send(`
        <div>
            <h1>Application Level Middleware</h1>
            <h1>${req.url}</h1>
            <h5>Middleware</h5>
        </div>
        `)
})

app.get('/admin/dashboards/:age', (req, res) => {
    if (req.params.age > 18) {
        res.send(`
        <div>
            <h1>Application Level Middleware</h1>
            <h1>${req.url}</h1>
            <h5>Middleware</h5>
        </div>
        `)
    }else{
       res.send(`
        age must be more than 18
        `)
    }
})

app.listen(4000, () => {
    console.log("server running.............");

})