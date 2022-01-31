const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("hello sir")
})
app.get('/about',(req,res)=>{
    res.send("hello sir this is about me")
})
app.listen(3001,()=>{
    console.log("srver is running at port 3001")
})