const cookieParser=require('cookie-parser')
const express= require('express')
const jwt=require('jsonwebtoken')
// there are two types of authentication one with the authrization head and cookie 
//the main difference between cookie and authentication head is cookie will be attached to every routes from browser and the head have to be mention in each routhe

// now useing middleware
const app= express();

// using bcript 
const bcrypt=require('bcrypt');// this will beused to encript the pasword and cookie than no. one ban see it 
//in this we will create an encription verson of the cookie 

// app.use(cookieParser());// this will add the cookie to every route once it is filled 
// app.get('/',(req,res)=>{
//     // res.cookie("name","harsh")// here name type of cookie is storing the hrash value 
//     res.send('front page')
//     // res.send('app is working')
// })
// app.get('/read',(req,res)=>{
//     // res.cookie("name","harsh")// here name type of cookie is storing the hrash value 
//     res.send('read page');
//     // res.send('app is working')
//     console.log(req.cookies)
// })

// how to use bycript for pasword dycription and enyciption 
// app.get('/',function (req,res){ // firat creating a simple api get route
//     bcrypt.genSalt(10, function(err, salt){ // than here we have the bcrypt function in which iam using gensalt where we are creating the salt for the paswrod to be mixed of 
//         bcrypt.hash("pasword",salt, function (err,hash){ //  now iam creating a hash variable where am mixing the salt with the pasword and generating the hased pasword 
//             console.log(hash); // it will show the hash pasword  -- $2b$10$ThX2sR8InUwGuLRzIKjPpOblAKx06qDaFoZjfNBKM/LdamqlUCw1O   ' the hased pasword 
//         })
//     })
//     res.send('working')
// })
// // now ia need to check that the pasword is right or not so iam going to compare the plan text pasword and hased one 
// app.get('/login',function(req,res){
//     bcrypt.compare('pasword','$2b$10$ThX2sR8InUwGuLRzIKjPpOblAKx06qDaFoZjfNBKM/LdamqlUCw1O', function(err,result){
//          // here we are comparing that the hased pasword and the plain pasword is equal or not by bcrypt 
//         console.log(result)
//     })
//     return res.end('working ')
// })


// now we learn about the JWT 
// the jwt is madeup of three parts header , body and signature this trio will form the jwt 
app.get('/',(req,res)=>{
    let token =jwt.sign({emqail:"rudresh@gmail.com"},'secret'); // here iam usinf jwt to create a token wich store my email and secret as a signature to encrypt the data 
    // mow i will use cookie to store the data 
    res.cookie("token",token)// now after creating a token iam storing it in the cookies 
    res.send("working ")
     
})
app.get('/read',(res,req)=>{ // so here we are dividig the jwt and the verify method hep us to use the 
    let data=jwt.verify(req.cookies.token,"secret");// the var going to store the three part of jwt token and we usally store our secret key in env 
    console.log(data)
})

app.listen(5000,()=>{
    console.log("server is running on the port 5000")
})