const mysql = require('mysql2')


const conn = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: 'demo1'
})

conn.connect((err) => {

    if (err) {
        console.log("Error at Connection level");
        return
    }

    console.log("Connected with database");

    const queryString = "CREATE TABLE emp(eid int,ename varchar(40),salary int)"

    conn.query(queryString, (e) => {
        if (e) {
            console.log("Error at the query level.......", e);
            return
        }
    })

    console.log("table Created successfully");


})

