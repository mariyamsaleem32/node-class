import User from '../../models/user/index.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

// post user
    const postUser = async (req,res) => {
    try{
        const password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create({
            ...req.body,
            password
        });
        const data = user.toObject();
        var token = jwt.sign({ email: user.email }, process.env.JWT_SCRET);
        delete data.password;
        res.status(201).send({ status:201,user: data,token})
    }catch(err){
        res.status(400).send({
            status:400,
            err
        })
    }};

    // get user 
    const getUser = async(req, res) => {
        try{  
            const users = await User.find();
            res.status(200).send({status: 200,users});
        }catch(err){
            res.status(400).send({status: 400,err})
        }};

// delete user
const deleteUser = async(req, res) => {
    try {
    const {id} = req.params;
    await User.findByIdAndDelete(id)
  res.status(200).send({
    status: 200,
    message:'user deleted succesfully',
    });
    } catch (err) {
    res.status(400).send({
        status: 400,
        err  
    })
}};

 // login user
 const loginUser = async(req, res) => {
    try{  
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
        const checkPassword = bcrypt.compareSync(password,user.password);
        if(checkPassword){
        var token = jwt.sign({ email: user.email }, process.env.JWT_SCRET);
        res.status(200).send({status: 200,message:'user login successfully',user,token});
        }else{
        res.status(401).send({status: 401,message:'incorrect password'})}
        }else{
        res.status(400).send({status: 400,message:'user not found'})}
    }catch(err){
    res.status(500).send({status: 500, err})
    }};

    // update user
    const updateUser = async(req, res) => {
        try {
            const {id} = req.params;
            await User.findByIdAndUpdate(id,req.body);
            res.status(200).send({
                status: 200,
                message:'user updated succesfully',
                });
                } catch (err) {
                res.status(500).send({
                    status: 400,
                    err  
                })
        }}


export {postUser,getUser,loginUser,deleteUser,updateUser};