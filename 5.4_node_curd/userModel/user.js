const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/EmpDATA')// assignig a server 
    .then(()=>{console.log('Mongo is connected')})
    .catch(err=>console.log('error'));
// now need to create the schema 
const EMPschema=mongoose.Schema({
    EmpID:Number,
    EmpName:String,
    Department:String,
    Age:Number
})

module.exports=mongoose.model('user',EMPschema)