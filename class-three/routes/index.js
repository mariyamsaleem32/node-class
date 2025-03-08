import expres from 'express';
import user_router from './user/index.js';

const router = expres.Router();
router.use('/user',user_router);

export default router;