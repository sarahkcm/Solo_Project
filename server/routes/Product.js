import express from 'express';
import { insertChoco,getChoco, getByLink, getById, updateOneProduct } from '../controllers/Product';


const router=express.Router();



// router.get('/', insertChoco);
router.get('/', getChoco);
router.get('/onlyOne/:Link', getByLink)
router.get('/:id', getById)
router.patch('/:id', updateOneProduct)




export default router;