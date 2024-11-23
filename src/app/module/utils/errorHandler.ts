
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed',
      success: false,
      error: errors.array(), // Returns all validation errors
    });
  }

  // if no validation errors
  next();
};


export const errorHandler = (err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    success: false,
    error: err,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};




