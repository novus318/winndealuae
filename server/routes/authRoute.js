import express  from "express";
import userModel from "../models/userModel.js";
import { comparePassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import verifyToken from "../helpers/authMiddleware.js";
const router=express.Router()

router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
      
     //check user
     const user = await userModel.findOne({ username });
     if (!user) {
       return res.status(404).send({
         success: false,
         message: "User not found",
       });
     }
     const match = await comparePassword(password, user.password);
     if (!match) {
       return res.status(401).send({
         success: false,
         message: "Invalid Password",
       });
     }
  
       //token
       const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "Login Successfully",
        user: {
          username: username,
        },
        token,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });

  router.post('/verify', verifyToken, (req, res) => {
  
    res.status(200).send({ success: true});
  });
  
  export default router