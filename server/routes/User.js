import express from 'express';
import { insertUser, signup} from '../controllers/User.js';


const router=express.Router();



// router.get('/', insertUser);
router.post('/user', signup)

export default router;