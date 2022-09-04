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


router.post('/save',(req,res)=>{
                     
      try{   
          
         const id = req.body.id;
         const name = req.body.name;
         const address = req.body.address;
         const tel = req.body.tel;

         const saveCustomerQuery = `INSERT INTO customer(id,name,address,tel) VALUES ('${id}' , '${name}' , '${address}' , '${tel}')` 
         connection.query(saveCustomerQuery,(err,result)=>{
               if(err) throw err;
               res.send({code:200,message:"Success",data:result})
         });

      }catch(err){
         res.json(err)
      }
                            
       
});



router.get('/getAll',(req,res) => {
          
            try{
               const getAll = "SELECT * FROM customer";
               connection.query(getAll,(err,result) => {
                      if(err) throw err;
                      res.send({code:200 , message:"Success" ,data:result})
               })
                
            }catch(err){
                
                res.send(err)
            }
});





module.exports = router;