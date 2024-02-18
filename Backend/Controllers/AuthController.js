require("dotenv").config();
const { db } = require("../utils/connection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const Register = async(req,res)=>{
    const {name , email , password} = req.body;
    try {
        const userExist = await db.query("SELECT * FROM userdetail WHERE email=?", [email]);
        if(userExist[0].length > 0){
            return res.status(409).json({message:"User already exists"});
        }

        const hashPassword = await bcrypt.hash(password , 10);
        await db.query("INSERT INTO userdetail (name , email , password) VALUES(?,?,?)",[name,email,hashPassword]);
        const token = jwt.sign({email} , process.env.SECRET_KEY , {expiresIn : "2d"});
        // console.log(token);
        res.status(200).json({message : "Registration Sucess"});
        
    } catch (error) {
        res.status(401).json({message :"Internal Server Error"});
    }


};


const Login = async(req,res) =>{
    const { email , password } = req.body;
    try {
        const [userData] = await db.query("SELECT * FROM userdetail WHERE email=?",[email]);
        if(!userData.length){
            return res.status(409).json({message : "Invalid Credentials"});
        }
        console.log(userData);

        const storedPassword = userData[0].password;
        const isValidPassword = await bcrypt.compare(password , storedPassword);
        if(!isValidPassword){
            return res.status(400).json({message :"Invalid Password"});
        }
        const token = jwt.sign({email} , process.env.SECRET_KEY , {expiresIn :"2d"});
        // console.log(token);
        res.status(200).json({message :"Login SucessFull" , token : token});
    } catch (error) {
        res.status(401).json({message :"Internal Server Error"});
    }
};

const userInformation = async(req,res) =>{
    const userData = req.user;
    console.log(userData);
    res.status(200).json(userData);

};

module.exports = { Register , Login , userInformation };