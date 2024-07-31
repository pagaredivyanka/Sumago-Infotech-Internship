const mongoose = require('mongoose')

const studentschema = mongoose.Schema({
    fname:String,
    lname:String,
    rollno:Number
})

module.exports = mongoose.model('studentdetail',studentschema)