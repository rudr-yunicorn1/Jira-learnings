const mongoose=require('mongoose'); // first importing the mongoos

mongoose.connect('mongodb://127.0.0.1:27017/loginpage') // providing a port to run 
  .then(() => console.log('MongoDB connected')) // if the connection above port run good then this will be printed 
  .catch(err => console.log(err));


const userSchema=mongoose.Schema ({ // this the schema for the mongo we have build in this object formate all teh data is stored 
    username:String,
    email:String,
    password:String,
    age:Number
});

module.exports=mongoose.model("user",userSchema); // here by using the module export functionality iam exporting the userschema as user in the other group of file 