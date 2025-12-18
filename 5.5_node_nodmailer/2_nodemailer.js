const express=require('express')
const app=express();
let port=5000

// importing the sendmail func form the controllers
const sendMail=require('./controller/2.1_sendMail')
// now iam calling with the api to use mail functionality 
app.get('/sendmail',async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
    // need to create a transport layer 
     const transporter =await nodemailer.createTransport({// this the server we have created and also using auth to verify the sender
        service:'gmail', // this time we are using the gmail service and this will send the email to the personal email 
        auth: {
        user: "you personal email ",  // senders email id 
        pass: "16 digit pasword ", // senders paswoed  the 16 digit pasword app mail pasword
    },
    })
    const info = await transporter.sendMail({
        from: '"Rudresh Dixit" <your personal email>', // senders address
        to: "recivers email", // recivers address
        subject: "Hello ✔",                             // subject  of the mail 
        text: "Hello world?", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body

    })
    console.log("Message sent:", info.messageId);
    res.json(info)
  }); // here we are calling the mail functionality 



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