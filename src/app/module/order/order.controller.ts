import { Request, Response, NextFunction } from 'express';
import Order from '../order/order.model';
import Product from '../product/product.model';


export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, product: productId, quantity } = req.body;

    // Find product from the database
    const product = await Product.findById(productId);

    if (!product) {
      res.status(400).json({
        message: 'Product not found',
        success: false,
        error: "NotFoundError",
      });
      return; //stop execution
    }

    if (product.quantity < quantity) {
      res.status(400).json({
        message: 'Insufficient stock',
        success: false,
        error: 'Not enough stock available',
      });
      return; // stop execution
    }


    // Update product 
    product.quantity -= quantity;
    product.inStock = product.quantity > 0;
    await product.save();

    // Calculate total price
    const totalPrice = product.price * quantity;

    // Create new order
    const order = new Order({ email, product: productId, quantity, totalPrice });
    const savedOrder = await order.save();

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: savedOrder,
    });
  } catch (err) {
    next(err);
  }
};

/* Calculate total revenue */
export const calculateRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const revenue = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } } },
    ]);

    const totalRevenue = revenue[0]?.totalRevenue || 0;

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (err) {
    next(err);
  }
};
