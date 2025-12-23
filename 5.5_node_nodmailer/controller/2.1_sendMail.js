// whenever we need to send mail ww are going to use   SMTP(simple mail transfer protocol)

const nodemailer=require("nodemailer")
// now we need to conmnect smpt server to forcr
const sendMail= async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
    // need to create a transport layer 
     const transporter =await nodemailer.createTransport({// this the server we have created and also using auth to verify the sender
        service:'gmail',
        auth: {
        user: "rdrshdixit@gmail.com",  // senders email id 
        pass: "djsehiyzuzajjdjy", // senders paswoed 
    },
    })
    const info = await transporter.sendMail({
        from: '"Rudresh Dixit" <rdrshdixit@gmail.com>', // senders address
        to: "r.techrt123@gmail.com", // recivers address
        subject: "welcome message✔",                             // subject  of the mail 
        text: "we welcome you to our app", // plain‑text body
        html: "<b>Hello world?</b>", // HTML body

    })
    console.log("Message sent:", info.messageId);
    res.json(info)
  };


module.exports=sendMail;