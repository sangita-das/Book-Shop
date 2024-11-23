/* import { Router } from 'express';

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../product/product.controller';

const router = Router();

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:productId', getProductById);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

export default router; */



// POST = /api/orders/ →  createOrder
// GET = /api/orders/revenue → calculateRevenue

import { Router } from 'express';
import { body } from 'express-validator';
import { createOrder, calculateRevenue } from '../order/order.controller';
import { validateRequest } from '../utils/errorHandler';

const router = Router();

router.post(
  '/',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('product').isMongoId().withMessage('Invalid product ID'),
    body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer'),
    validateRequest, // Middleware to handle validation errors
  ],
  createOrder
);

router.get('/revenue', calculateRevenue);

export default router;


