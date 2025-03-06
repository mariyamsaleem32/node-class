import express from 'express';
import postUser from './post.js';
import getUser from './get.js';

const router = express.Router();
router.post('/',postUser);
router.get('/',getUser)

export default router;