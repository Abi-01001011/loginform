const route = require("express").Router();
const data =  require("schema.js")
const path = require('path');

app.get("/",(req,res)=>{
    res.sendFile("login.hbs");
    })
    
    app.get("/signup",(req,res)=>{
        res.sendFile("signup.hbs");
        })
    
    
        app.post('/signup',async (req,res)=>{
    
           const logs=new data(req.body);
           logs.save().then(() =>{

            res.redirect("/login")

           }).catch(err=>{console.log(err)})
        })

        app.post('/login',(req,res)=>{
            const email=req.body.email;
            const password=req.body.password;
            data.findOne({ email:email}).then((result)=>{
                if(result == null){
                    console.log("User not found");
                    res.render("log",{email})
                }
                else if(password == result.password){
                    res.render("home.hbs",{email})
                }
                else{
                    res.render("home.hbs",{email})
                    console.log("wrong password")
                }
        })


        
    })
    module.exports=route;
    
