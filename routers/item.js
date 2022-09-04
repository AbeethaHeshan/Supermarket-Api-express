const express = require('express')
const res = require('express/lib/response')
const router = express.Router()
const mysql = require('mysql')
const db = require('../configs/db.configs')


const connection = mysql.createConnection(db.database)
router.use(express.json())


connection.connect((err)=>{
        if(err){

        }else{
            const itemTable = "CREATE TABLE IF NOT EXISTS item (itemId VARCHAR(255) PRIMARY KEY,description VARCHAR(255),quentity int,unitprice double)" 
            connection.query(itemTable,function(err,result){
                 if(err) throw err;
                 if(result.warningCount === 0){
                     console.log("itemTable Created");
                 }
            })
        }
});


router.post('/save',(req,res)=>{
       
       try{
          
        const id = req.body.id;
        const description = req.body.description;
        const quentity = req.body.quentity;
        const unitPrice = req.body.unitPrice;
           console.log(id);
        const itemSaveQuery = `INSERT INTO item (itemId,description,quentity,unitprice) VALUES ('${id}','${description}','${quentity}','${unitPrice}')`
        connection.query(itemSaveQuery,(err,result)=>{
                  if(err) throw err;
                  res.send({code:200 , message: "Success" ,data:result})
        });
        

       }catch(err){
           req.json(err);
       }
})

module.exports = router;