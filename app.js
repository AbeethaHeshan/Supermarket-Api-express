const express = require('express')
const customer = require('../Shop/routers/customer')
//const item = require('./routers/item')
//const order = require('./routers/order')
//const orderDetails = require('./routers/orderDetils')

const app = express()
const port = 4001


app.use('/customer',customer)
//app.use('/item',item)
//app.use('/order',order)
//app.use('/orderDetails',orderDetails)

app.listen(port,()=>{
     console.log(`app listen port ${port}`);
})