import express from 'express';
import postUser from './post.js';

const router = express.Router();
router.post('/',postUser);

export default router;