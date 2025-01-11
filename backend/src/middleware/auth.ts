import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import User from '../Model/user';
import { sendResponse } from '../utils/responseUtils';

export interface AuthenticatedRequest extends Request {
  user?: any;
}

// Authentication Middleware
export const isAuthenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1]; // Expecting "Bearer <token>"

  if (!token) {
    return sendResponse(res, 'Token is required', null, false, 401);
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.error('JWT_SECRET is not defined in environment variables');
      return sendResponse(res, 'Server error. Please try again later.', null, false, 500);
    }

    const decoded = jwt.verify(token, secret) as { userId: string; role: string };
    const user = await User.findById(decoded.userId);

    if (!user) {
      return sendResponse(res, 'User not found', null, false, 404);
    }

    req.user = user; // Attach user to the request
    next();
  } catch (error) {
    console.error('Token validation error:', error);
    return sendResponse(res, 'Token is invalid or expired', null, false, 403);
  }
};

// Admin Access Middleware
export const hasAdminAccess = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  if (!req.user) {
    return sendResponse(res, 'User not authenticated', null, false, 401);
  }

  if (req.user.role !== 'admin') {
    return sendResponse(res, 'Insufficient privileges. Admin access required.', null, false, 403);
  }

  next();
};

