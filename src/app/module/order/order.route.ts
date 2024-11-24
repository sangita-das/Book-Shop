// POST = /api/orders/ →  createOrder
// GET = /api/orders/revenue → calculateRevenue

import { Router } from 'express';
import { body } from 'express-validator';
import { calculateRevenue, createOrder } from './order.controller';
import { validateRequest } from '../utils/errorHandler';

const router = Router();

router.post(
  "/",
    [
    body('email').isEmail().withMessage('Invalid email format'), 
    body('product').isMongoId().withMessage('Invalid product ID'), 
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be greater than 0'), 
    body('totalPrice').isFloat({ gt: 0 }).withMessage('Total price must be a positive number'), // 
  ],
  validateRequest,  
  createOrder,  
);

router.get("/revenue", calculateRevenue);

export default router;





