import express from 'express';
import {postUser,getUser,deleteUser,updateUser} from './user.js';

const user_router = express.Router();
user_router.post('/',postUser);
user_router.get('/',getUser)
user_router.delete('/:id',deleteUser)
user_router.put('/:id',updateUser)

export default user_router;