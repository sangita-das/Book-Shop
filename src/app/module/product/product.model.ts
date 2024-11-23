import mongoose, { Schema, Document } from 'mongoose';

enum Category {
  Fiction = 'Fiction',
  Science = 'Science',
  SelfDevelopment = 'SelfDevelopment',
  Poetry = 'Poetry',
  Religious = 'Religious',
}

interface Product extends Document {
  title: string;
  author: string;
  price: number;
  category: Category;
  description: string;
  quantity: number;
  inStock: boolean;
}

const ProductSchema: Schema = new Schema(
  {
    title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price must be a positive value"],
  },
  category: {
    type: String,
    enum: Object.values(Category),
    required: [true, "Category is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [500, "Description cannot exceed 500 characters"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity must be a positive value or zero"],
  },
  inStock: {
    type: Boolean,
    required: true,
    default: false,
  },

  },
  { timestamps: true }
);

export default mongoose.model<Product>('Product', ProductSchema);
