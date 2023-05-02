const express=require("express")
const app=express();
const path= require("path");
const hbs= require("hbs");
const schema=require('./schema');
const route=require('./route');
const templatepath=path.join(__dirname,'.../templates')
const mongoose=require('mongoose');

app.use(express.json())
 app.set('view engine','hbs');
 app.set('views',templatepath)
 app.use(express.urlencoded({extended:false}))

 const mongo = "mongodb://localhost:27017/ethnotech";
 mongoose.connect(mongo,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
     console.log("db connected")
     app.listen(8000,()=>{
         console.log("serverrunning ");
     })
 }).catch(err=>console.log(err))


 app.use(route)

app.get("/",(req,res)=>{
    res.render("home.hbs")
})
 