const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = require('../configs/db.configs')


const connection = mysql.createConnection(db.database)
router.use(express.json())


connection.connect((err)=>{

           if(err){
              
           }else{
              const itemTablequery = "CREATE TABLE IF NOT EXISTS `Order` (orderid VARCHAR(255) PRIMARY KEY, custId VARCHAR(255) , orderDate DATE ,CONSTRAINT FOREIGN KEY (custId) REFERENCES customer(id) ON DELETE CASCADE ON UPDATE CASCADE ) "
                  connection.query(itemTablequery,function(err,result){
                     if(err) throw err;
                     if(result.warninCount === 0){
                         console.log('customer table created');
                     }     

                 }); 
                

           }



 });



 module.exports = router;