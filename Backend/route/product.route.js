import express from 'express';
import { getproducts } from '../controller/product.controller.js';

const router = express.Router();

router.get('/',getproducts);

export default router;