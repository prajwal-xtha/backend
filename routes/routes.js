const express=require('express')
const routes=express.Router()
const middleware1=require('../authintication/middleware')

const {register,login,home,profile,global,demo}=require('../controller/controller')

//register and login
routes.post('/register',register)

routes.get('/login',login)
routes.get("/home",middleware1,home)
routes.get('/profile',middleware1,profile)
routes.get('/',global)
routes.get('/demo',demo)

module.exports=routes