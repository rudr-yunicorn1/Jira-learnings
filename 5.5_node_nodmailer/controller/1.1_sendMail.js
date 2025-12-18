// whenever we need to send mail ww are going to use   SMTP(simple mail transfer protocol)

const nodemailer=require("nodemailer")
// now we need to conmnect smpt server to forcr
const sendMail= async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
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
  };


module.exports=sendMail;