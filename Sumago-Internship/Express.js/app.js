const express = require('express')
const app = express()

// to connect express and mongodb
const mongoose = require('mongoose')
mongoose.connect ('mongodb://localhost:27017/student')

.then(()=>{console.log("mongodb connected");

})

.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.send ("localhost 8000")
})

app.use(express.json())

const route = require('./route')
app.use('/abc',route)

app.listen(8000,()=>{

    console.log('server runs on localhost 8000');
})