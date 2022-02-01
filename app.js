const dotenv=require('dotenv');
const express=require('express');
const app=express()

dotenv.config({path: './config.env'});
require('./db/conn')

app.get('/',(req,res)=>{
    res.send("hello sir")
})
app.get('/about',(req,res)=>{
    res.send("hello sir this is about me")
})
app.listen(3001,()=>{
    console.log("server is running at port 3001")
})