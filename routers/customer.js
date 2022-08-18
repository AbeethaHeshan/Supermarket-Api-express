const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = require('../configs/db.configs')


const connection = mysql.createConnection(db.database)
router.use(express.json())

connection.connect(function(err) {
    if(err){

       console.log("Error ");
       console.log(err)
     
    }else{
      
       let userTableQuery = "CREATE TABLE IF NOT EXISTS customer (id VARCHAR(255)PRIMARY KEY, name VARCHAR(255) , address VARCHAR(255) , tel VARCHAR(255))"
       connection.query(userTableQuery,function(err,result){
                if(err) throw err;
                if(result.warningCount === 0){
                   console.log('CustomerTableCreated');
                }
                
        });
        
         console.log("Database created"); 
    }
});





module.exports = router;