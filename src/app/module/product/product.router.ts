import { Router } from "express";
import { createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct, } from "./product.controller";



const productRouter = Router()

productRouter.post('/', createProduct);
productRouter.get('/', getAllProducts);
productRouter.get('/:productId', getProductById);
productRouter.put('/:productId', updateProduct);
productRouter.delete('/:productId', deleteProduct);

export default productRouter

// http://localhost:5000/api/product/create-product