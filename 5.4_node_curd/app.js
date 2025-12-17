const express= require('express');
const app=express()
const EMPdata=require('./userModel/user');
const bcrypt =require('bcrypt')
const jwt=require('jsonwebtoken')
const path =require('path')
const cookieParser=require('cookie-parser');
const { error } = require('console');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res)=>{ // creating the async function because below we are doning the input function 
   // const empdata=await EMPdata.find() // here we are factiching all the data rom the monog file and using await so it could run in back and camt disturb the sync op 
    try {
    const empdata = await EMPdata.find()   // fetch all docs

    res.status(200).json({
      success: true,
      count: empdata.length,
      data: empdata
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

})
app.get('/EMP/:EMPid',async(req,res)=>{
    try{
    const {userId}= req.params
    // console.log(req.params)// it will show the url params perameter and the value pased at that place 

    const user = await EMPdata.find(userId)
    console.log(userId)
    
    if(!user){
        return res.send("User not found")
    }

    return res.status(200).json({message:"users found",data:user})
}catch(error){
    res.status(500).json({
      success: false,
      message: error.message
    })
}
})

app.post('/create',async(req,res)=>{
    const empdata=req.body 
    
    try {
    // empdata is already JSON
    const user = new EMPdata(empdata)

    const savedUser = await user.save()

    res.status(201).json({
      message: 'User saved successfully',
      data: savedUser
    })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }

    console.log('post method called')
})

app.put("/update/:id",async(req,res)=>{
    console.log('rudresh')
    try{
        const  empid =Number(req.params.id)
        const empdata=req.body   
        
        const updata=await EMPdata.findOneAndUpdate(
            {EmpID:empid},
            {$set:empdata},
            {new:true}
        )
        
        if(!updata){
            return res.status(404).json({message:"data not found "})
        }
        return res.status(200).json({message:'empidupdated', data:updata})


    }catch(error){
        res.status(500).json({error:error.message})
    }
})

app.delete("/delete/:EMP",async(req,res)=>{
    try{
        const empid= Number(req.params.EMP)
        console.log(req.params.EMP)
        const deletedEmp = await EMPdata.findOneAndDelete({
            EmpID: empid
        })
        
        if(!deletedEmp){
            return res.status(404).json({message:'user not found'})
        }
        return res.status(200).json({mesage:'Employee deleted'})
    }catch (error){
        res.status(500).json({error:error.message})
    }
})


app.listen(5000,()=>{
    console.log('server is running on the port 5000')
})
