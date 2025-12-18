const nodemailer=require("nodemailer")

const sendMial=async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
    try{
        const email=req.params.email
        console.log(email);

       const user = await User.findOne({ UserEmail: email })
       console.log(user)
        console.log('working')
        
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
        to: user.UserEmail, // recivers address
        subject: "welcome message✔",                             // subject  of the mail 
        text: `we welcome ${user.UserName} to our app`, // plain‑text body
        html: `<b>welcome ${user.UserName} </b>`, // HTML body

    })
    console.log('end')
    console.log("Message sent:", info.messageId);

    res.json(info)
    }catch(error){
        res.status(500).json({error:error.message})
    }
  }

  module.exports=sendMail