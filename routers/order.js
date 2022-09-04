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

router.post('/save',(req,res)=>{
      
         try{
             
            const id = req.body.id;
            const custId = req.body.custId;
            const date = req.body.date;
            
            const orderSaveQury = "INSERT INTO `Order` (orderid,custId,orderDate) VALUE('"+id+"','"+custId+"' ,'"+date+"')"
            connection.query(orderSaveQury,(err,result)=> {
                 if(err) throw err;
                 res.send({code:200,message:result})
            })
         }catch(err){
              res.send(err)
         }

})




 });



 module.exports = router;