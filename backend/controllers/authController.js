import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


//Sign Up
export const registerUser = async(req, res) =>{

      try {

            const {email, name, password} = req.body;

            //check fill all those thing or not correctly
            if(!email || !name || !password || password.length < 8){
                  return res.status(400).json({
                        success:false,
                        message:'Fill all the feilds'
                  })
            }

            // check if user already exists
            const exists = await User.findOne({email});
            if(exists){
                  return res.status(400).json({
                        success:false,
                        message:'user already exists'
                  })
            }

            //hased password
            const hasedPassword = await bcrypt.hash(password, 10);

            //create user
            const user = await User.create({
                  name,
                  email,
                  password:hasedPassword,
            });

            res.status(201).json({
                  success:true,
                  message:'User register Successfully',
                  user,
            })

            
      } catch (error) {
            console.log(error.message)
            return res.json({
                  success:false,
                  message:error.message
            })
      }
}


//Login 
export const loginUser = async(req, res) =>{

      try {
            const {email, password} = req.body

            //check user exists or not
            const user = await User.findOne({email});
            if(!user){
                  return res.status(400).json({
                        success:false,
                        message:'User not found'
                  })
            }

            //to check password is match or not
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                  return res.status(400).json({
                        success:false,
                        message:'Invalid password'
                  })
            }

            //generate token
            const token = jwt.sign(
                  { id: user._id, email: user.email },
                  process.env.JWT_SECRET,
                  { expiresIn: "1d" }
            );

            res.json({
                  success:true,
                  message: "Login successful",
                  token,
                  user: {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  }
            });

      } catch (error) {
            console.log(error.message)
            return res.json({
                  success:false,
                  message:error.message
            })
      }
}