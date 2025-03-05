import expres from 'express';
import user from './user/index.js'
const router = expres.Router();

router.use('/user',user);

export default router;