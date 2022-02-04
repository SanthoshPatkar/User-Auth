const express = require("express");
const router = express.Router();
const bcrypt =require("bcryptjs")

require("../db/conn");

const User = require("../model/userschema");
router.get("/", (req, res) => {
  res.send("hello sir router");
});
// using promise 

// router.post('/register',(req,res)=>{
//     const {name,email,phone,password,cpassword}=req.body;

//     if(!name || !email || !phone || !password || !cpassword)
//     {
//         return res.status(422).json({error:"error macha pls fill properly"});
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist) {
//         return res.status(422).json({error:"email already exist"});
//         }

//         const user=new User({name,email,phone,password,cpassword});
//         user.save().then(()=>{
//             res.status(201).json({message:"successfully rgistered"});
//         }).catch((err)=>{
//             return res.status(500).json({error:"failed to register"});
//         })
//     }).catch(err=>console.log(err))
// })
router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "error macha pls fill properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }
    else if (password != cpassword)
    {
        return res.status(422).json({ error: "password not matching" });
    }
    else{
        const user = new User({ name, email, phone, password, cpassword });

        const response = await user.save();
        if (response) {
          res.status(201).json({ message: "successfully rgistered" });
        } else {
          return res.status(500).json({ error: "failed to register" });
        }
    }
    
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin",async (req,res)=>{
    // console.log(req.body)
    try{
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(400).json({ error: "error macha pls fill properly" });
        }

        const userLogin=await User.findOne({email:email});
        // console.log(userLogin);
        if(userLogin)
        {
          const isMatch=await bcrypt.compare(password , userLogin.password)
          if(!isMatch)
          {
              res.status(400).json({error:"Invalid Credential"});
          }else{
              res.json({message:"user signin sucessfull"});
          }
        }
        else{
          res.status(400).json({error:"Invalid Credential"});
        }
       
    }catch(err){
            console.log(err)
    }
})
module.exports = router;
