const express=require('express')
const app=express();
let port=5000
const nodemailer=require("nodemailer")
const sendMail=require('./controller/2.1_sendMail')
// importing the sendmail func form the controllers
// now iam calling with the api to use mail functionality 
app.get('/sendmail',sendMail)



const start=async()=>{
    try{
        app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})
    }catch (error){
        res.status(500).json({error:error.message})
    }
}

start()