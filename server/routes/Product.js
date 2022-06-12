import express from 'express';
import { insertChoco,getChoco, getByLink, getById } from '../controllers/Product';


const router=express.Router();



// router.get('/', insertChoco);
router.get('/', getChoco);
router.get('/onlyOne/:Link', getByLink)
router.get('/:id', getById)




export default router;