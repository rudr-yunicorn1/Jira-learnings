const express=require('express')
const app=express();
const nodemailer=require("nodemailer")
const User=require('./user_model/user')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
let port=5000 
app.post('/Signup',async(req,res)=>{
    try{
        const data=req.body
        const user = new User(data)
        const savedUser = await user.save()
        
        if(savedUser){
             return res.redirect(`/sendmail/${data.UserEmail}`)
        }
        return res.status(400).json({message:'please fil the data'})
        
    }catch(error){
        res.status(500).json({error:error.message})
    }
})



app.get('/sendmail/:email',async (req,res)=>{ // this is the function which is called from the app. js file to send the mail 
    try{
        const email=req.params.email
        console.log(email);

       const user = await User.findOne({ UserEmail: email })
       
        
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
    
    console.log("Message sent:", info.messageId);

    res.json(info)
    }catch(error){
        res.status(500).json({error:error.message})
    }
  }) // here we are calling the mail functionality 

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