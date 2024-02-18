require("dotenv").config();
const jwt = require("jsonwebtoken");
const { db } = require("../utils/connection");

const authMiddleware = async(req,res,next) =>{
    const token = req.header("Authorization");
    if(!token){
        return res.status(400).json({message :"Token Not Found"});
    }

    const jwtToken = token.replace("Bearer " , "").trim();
    console.log(jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken , process.env.SECRET_KEY);
        const {email} = isVerified;

        const [userInfo] = await db.query("SELECT userid, name , email FROM userdetail WHERE email =?",[email]);
        if(userInfo.length > 0){
            req.user = userInfo;
            next();
        }else{
            res.status(409).json({message : "Not Authorized User"});
        }
        
    } catch (error) {
        return res.status(400).json({message :"Token Not Found"});
    }

}

module.exports= authMiddleware;