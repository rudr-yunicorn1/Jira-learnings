// Nodemailer is an npm module that allows you to send emails easily from the backend.
// send email using a Gmail account with the help of nodemailer. 

// Use nodemailer.createTransport() function to create a transporter who will send mail. It contains the service name and authentication details (user ans password).
// Declare a variable mailDetails that contains the sender and receiver email id, subject and content of the mail.
// Use mailTransporter.sendMail() function to send email from sender to receiver. If message sending failed or contains error then it will display error message otherwise message send successfully.
const express=require('express')
const app=express();
let port=5000
const nodemailer=require("nodemailer")
const sendMail=require('./controller/1.1_sendMail')
// importing the sendmail func form the controllers
// now iam calling with the api to use mail functionality 
app.get('/sendmail',sendMail);



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