import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../config/generateToken.js';
  //@description     Register a user
//@route           POST /api/user/registeruser
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
    const {email,name,password,pic,}=req.body;
    if(!email || !name || !password){
        res.status(400);
    throw new Error("Please Enter all the Feilds");
    } 
    console.log(email,name);
    const userExist= await User.findOne({email})
    if(userExist){
        res.status(400);
        throw new Error("user already exist");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
      });
    
      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          pic: user.pic,
          token:generateToken(user._id),
        });
      } else {
        res.status(400);
        throw new Error("User not found");
      }
  });

 //@description     Login a user
//@route           POST /api/user/loginuser
//@access          Public
const loginUser = asyncHandler(async (req, res) => {
    const {email,password}=req.body;
    if(!email  || !password){
        res.status(400);
    throw new Error("Please Enter all the Feilds");
    } 
    
    const user= await User.findOne({email})
    if(user && await user.matchPassword(password)){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token:generateToken(user._id),
            pic: user.pic,
          });
    }else{
        res.status(400);
        throw new Error("Invalid email or password");
    }
   
    
  });



  export {registerUser,loginUser}