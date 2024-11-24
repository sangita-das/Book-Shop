import express, { Request, Response } from 'express';
import productRouter from './app/module/product/product.router';
import orderRouter from './app/module/order/order.route';
import { errorHandler } from './app/module/utils/errorHandler';


const app = express();

// middleware
app.use(express.json());

// application routes
app.use('/api/products', productRouter)
app.use('/api/orders', orderRouter)

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live .. ',
  })
})

export default app