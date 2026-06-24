const express=require('express')
const routes=express.Router()
const middleware1=require('../authintication/middleware')

const {register,login,home,profile,global}=require('../controller/controller')

//register and login
routes.post('/register',register)

routes.post('/login',login)
routes.get("/home",middleware1,home)
routes.get('/profile',middleware1,profile)
routes.get('/',global)

module.exports=routes