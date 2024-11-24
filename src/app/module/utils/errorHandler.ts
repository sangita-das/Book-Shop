import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  // If there are validation errors, pass the error to the next middleware (error handler)
  if (!errors.isEmpty()) {
    // Instead of returning a response, we call next with an error object
    const error = new Error('Validation failed') as any;
    error.status = 400; // Set HTTP status to 400 (Bad Request)
    error.details = errors.array(); // Attach validation errors to the error object
    return next(error); // Pass the error to the next middleware
  }
  // if no validation errors
  next();
};

// Global error handler
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.status || 500; // Default to 500 if no status is set
  const message = err.message || 'Internal Server Error'; // Use the error message or default message
  
  res.status(statusCode).json({
    message,
    success: false,
    error: err.name || 'UnknownError', // Attach the error name
    details: err.details || undefined, // Attach any additional details (e.g., validation errors)
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Show stack trace in dev environment only
  });
};