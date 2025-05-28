const mysql = require('mysql2')

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
})

conn.connect((err)=>{
   if(err) 
   {
     console.log(err);
     return
     
   }
   console.log("connected with database");
   conn.query("CREATE DATABASE demo1",(e)=>{
      if(e)
      {
        console.log("Error Ocuure at query level",e);
        return 
      }

      console.log("Database Created successfully.....");
      
   })
})