import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express';
const route = express.Router();
import {User} from '../model/user.model.js'
route.post('/register', async (req, res)=>{
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).send('User registered successfully');
      } catch (error) {
        console.log(error);
        res.status(500).send('Error registering user');
      }
    });                          

route.post('/login',async(req,res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).send('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          return res.status(401).send('Invalid password');
        }
        const token = jwt.sign({ userId: user._id }, 'asdfghjkl');
        res.status(200).json({ token });
      } catch (error) {
        console.log(error);
        res.status(500).send('Error logging in');
      }
})
export default route;
