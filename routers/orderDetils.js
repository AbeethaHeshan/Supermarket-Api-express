const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const db = require('../configs/db.configs')


const connection = mysql.createConnection(db.database)
router.use(express.json())

connection.connect(function(err){
     
        if(err){

        }
        else{
            
            let orderDetailTable = "CREATE TABLE IF NOT EXISTS orderDetail (orderId VARCHAR(255),itemId VARCHAR(255),qty int,CONSTRAINT FOREIGN KEY (orderId) REFERENCES `order`(orderId) ON DELETE CASCADE ON UPDATE CASCADE , CONSTRAINT FOREIGN KEY (itemId) REFERENCES item(itemId) ON DELETE CASCADE ON UPDATE CASCADE)";
            connection.query(orderDetailTable,(err,result)=>{
                 if(err) throw err;
                 if(result.warningCount === 0){
                     console.log('Order Details');
                 }
            })

        }
})





module.exports = router;