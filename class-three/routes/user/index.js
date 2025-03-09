import express from 'express';
import {postUser,getUser,loginUser,deleteUser,updateUser} from './user.js';
import tokenVerification from '../../config/verify.js';

const user_router = express.Router();
user_router.post('/',postUser);
user_router.get('/',tokenVerification,getUser)
user_router.delete('/:id',deleteUser)
user_router.put('/:id',updateUser)
user_router.post('/login',loginUser)

export default user_router;