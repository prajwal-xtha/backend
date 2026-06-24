
// const jwt=require('jsonwebtoken')





// const authmidleware=(req,res,next)=>{
// console.log("auth middle ware is called")
// const header=req.headers['authorization']
// const token =header && header.split(" ")[1]
// console.log(token)
// if(!token){
//     res.status(400).json({
//         success:false,
//         massage:"you are not authorize"
//     }
//     )
// }
// //decode
// try{
//     const decodedtocan=jwt.verify(token,"secretkey")
//     console.log(decodedtocan)
//     req.userinfo=decodedtocan;
//     next();

// }catch(error){
//     res.status(400).json({
//         success:false,
//         massage:"you are noot authorize"
//     })
// }



// }

// module.exports=authmidleware;
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const header = req.headers.authorization;
    console.log("Header:", header);
  
    const token = header && header.split(" ")[1];
    console.log("Token:", token);
  
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
  
    try {
      const decoded = jwt.verify(token,'secretkey');
  
      console.log("Decoded:", decoded);
  
      req.user = decoded;
      next();
    }catch (error) {
        console.log("JWT ERROR:", error.message);
      
        return res.status(401).json({
          success: false,
          message: "Invalid token",
        });
      }
  };

module.exports = authMiddleware;