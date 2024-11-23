import mongoose, { Schema, Document } from 'mongoose';

interface Order extends Document {
  email: string;
  product: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}

const OrderSchema: Schema = new Schema(
  {
    email: {
       type: String,
       required: true 
      },
    product: 
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Product', 
      required: true 
    },
    quantity: 
    {
       type: Number, 
       required: true, 
       min: 1 
      },
    totalPrice: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

export default mongoose.model<Order>('Order', OrderSchema);
