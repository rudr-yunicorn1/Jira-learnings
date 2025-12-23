const express = require('express');// importing express
const app = express();// using express through app
const path = require('path');// inmporting path 
const cookieParser = require('cookie-parser'); // importing cookieparsher help to store cookie and crete tham 
const User = require('./user_models/user');// here we are importing the monogdb schema from teh model we created 
const bcrypt = require('bcrypt'); // importing the bcrypt 
const jwt=require('jsonwebtoken') // importing the jwt 

// VIEW ENGINE
app.set('view engine', 'ejs'); // here we are using the ejs file and it is used to render the html file sysytem 
app.set('views', path.join(__dirname, 'views')); // here iam seting the view path 
//  BODY PARSERS (MUST BE BEFORE ROUTES)
app.use(express.urlencoded({ extended: true })); // using express middleware to use form functionality in frontend 
app.use(express.json()); // middleware for json 

app.use(cookieParser()); // using the cookie parser in every route
app.use(express.static(path.join(__dirname, 'public'))); // the midleware saved in the public folder are used 

// GET ROUTE
app.get('/', (req, res) => {
    res.render('index'); // here we are rendering the index.ejs file which will show the home page 
});

// POST ROUTE (FIXED)
app.post('/create', (req, res) => {// this is the api by which we will be working on the create route 
    // here the html page direct us 
    // console.log('BODY:', req.body); // DEBUG LINE

    // 🛡 SAFE DESTRUCTURING
    let { username, email, password, age } = req.body || {}; // first we are storing all the input vqalues in the req.body because its a post request we can use the data
    
    bcrypt.genSalt(10, (err, salt)=>{ // now we are hasing by the use of salt functionality here 10 represent roteation , salt - algo , and they are async function to hash 
         bcrypt.hash(password,salt, async(err,hash)=>{  // we are hasing the pasword as given with salt and in async enviormnet 
                let createuser= await User.create({ // here the User is the model or representing the userschema we made in the user.js mogodb 
                    username,
                    email,
                    password:hash,
                    age
                
                })
                let token= jwt.sign({email},'secret');
                res.cookie("token",token)
                res.send(createuser);
            })
    })
  

    // if (!username || !email || !password || !age) {
    //     return res.status(400).send('All fields are required');
    // }

    
});

app.get('/login',(req,res)=>{ // when we render file we alsways use the get methood to display the data 
    res.render('login');
})

// below iam planing to check if the email and pasword macth the present user or not 
app.post('/login', async(req,res)=>{
    let user =await User.findOne({email:req.body.email});
    if(!user)return res.send('something went wrong')//first iam checking that the email is rigth or not       w
    // now aim agona compae if the pasword is right or not 
    if(bcrypt.compare(req.body.password,user.email)){  // here we are comparing the user given pasword and the pasword we hade in the user just matched by email 
        let token= jwt.sign({email:user.email},'secret'); // now token created at athe time of creatin and the token ata the login time will be with us untill we log out 
        res.cookie("token",token)// saving the jwt token as the cookie 
        res.send('yes you can login') // resposne 
        res.send({user}) // respones with the user data 
    }
    else res.send(" you cant login something is wrong ") // if the user gives a wrong data 
})

app.get('/logout',function(req,res){ // logout page 
    res.cookie("token","")
    res.redirect('/')
})

// SERVER
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
