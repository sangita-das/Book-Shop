import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Product from '../product/product.model';


// create book/product
export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json({
      message: 'Book created successfully',
      success: true,
      data: savedProduct,
    });
  } catch (err) {
    next(err);
  }
};


// get all products
export const getAllProducts = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const searchTerm = req.query.searchTerm as string;
    const filter = searchTerm
      ? { $or: [{ title: searchTerm }, { author: searchTerm }, { category: searchTerm }] }
      : {};
    const products = await Product.find(filter);
    res.json({
      message: 'Books retrieved successfully',
      success: true,
      data: products,
    });
  } catch (err) {
    next(err);
  }
};


// get single book by id
export const getProductById = async (req: Request<{ productId: string }>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Invalid Product ID', success: false });
      return;
    }

    const product = await Product.findById(productId);
    if (!product) {
      res.status(404).json({ message: 'Book not found', success: false });
      return;
    }

    res.json({
      message: 'Book retrieved successfully',
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};


// Update a book
export const updateProduct = async (req: Request<{ productId: string }>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Invalid Product ID', success: false });
      return;
    }

    const product = await Product.findByIdAndUpdate(productId, req.body, { new: true });
    if (!product) {
      res.status(404).json({ message: 'Book not found', success: false });
      return;
    }

    res.json({
      message: 'Book updated successfully',
      success: true,
      data: product,
    });
  } catch (err) {
    next(err);
  }
};


// delete a book
export const deleteProduct = async (req: Request<{ productId: string }>, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { productId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      res.status(400).json({ message: 'Invalid Product ID', success: false });
      return;
    }

    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      res.status(404).json({ message: 'Book not found', success: false });
      return;
    }

    res.json({
      message: 'Book deleted successfully',
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
