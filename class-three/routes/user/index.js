import express from 'express';
import postUser from './post.js';
import getUser from './get.js';
import deleteUser from './delete.js';
import updateUser from './update.js';

const router = express.Router();
router.post('/',postUser);
router.get('/',getUser)
router.delete('/:id',deleteUser)
router.put('/:id',updateUser)

export default router;