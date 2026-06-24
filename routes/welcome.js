const express=require('express')
const routes=express.Router()
const middleware1=require('../authintication/middleware')

routes.get("/welcome",middleware1,(req,res)=>{
    res.json({
        message:"welcome to welcome page",
        user: req.userinfo
    })
})
module.exports=routes