// Nodemailer is an npm module that allows you to send emails easily from the backend.
// send email using a Gmail account with the help of nodemailer. 

// Use nodemailer.createTransport() function to create a transporter who will send mail. It contains the service name and authentication details (user ans password).
// Declare a variable mailDetails that contains the sender and receiver email id, subject and content of the mail.
// Use mailTransporter.sendMail() function to send email from sender to receiver. If message sending failed or contains error then it will display error message otherwise message send successfully.
const express=require('express')
const app=express();
let port=5000

// importing the sendmail func form the controllers
// now iam calling with the api to use mail functionality 
app.get('/sendmail',async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
    // need to create a transport layer 
     const transporter =await nodemailer.createTransport({// this the server we have created and also using auth to verify the sender
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
        user: "delphine.hartmann@ethereal.email",  // senders email id 
        pass: "djf443SpjzscH6yuKF", // senders paswoed 
    },
    })
    const info = await transporter.sendMail({
        from: '"Rudresh Dixit" <delphine.hartmann@ethereal.email>', // senders address
        to: "r.techrt123@gmail.com", // recivers address
        subject: "Hello ✔",                             // subject  of the mail 
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body

    })
    console.log("Message sent:", info.messageId);
    res.json(info)
  });



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