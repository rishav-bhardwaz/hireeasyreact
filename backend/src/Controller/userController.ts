import { Request, Response, NextFunction } from 'express';
import User from '../Model/user';
import jwt from "jsonwebtoken";
import { sendResponse } from '../utils/responseUtils';
import { AuthenticatedRequest } from "../middleware/auth";

import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    // console.log("Request Body:", req.body);
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return sendResponse(res, "Email and password are required", null, false, 400);
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return sendResponse(res, "Invalid credentials", null, false, 401);
        }

        // Validate password
        const isValidPassword = await user.isValidatedPassword(
            password,
            user.password
          );
      
          if (!isValidPassword) {
            return sendResponse(res, 'Invalid credentials', null, false, 401);
          }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET || "defaultSecret", // Use default secret for development
            { expiresIn: "7d" }
        );

        // Remove password from the response object
        const userResponse = user.toObject();
        userResponse.password = "";


        // Send success response
        return sendResponse(res, "Login Successful!", { user: userResponse, token }, true, 200);
    } catch (error: any) {
        console.error("Error during login:", error);
        return sendResponse(res, "Internal server error", null, false, 500);
    }
};


export const addUser = async (req: Request, res: Response) => {
    try {
        const { name, phoneNo, password, role,email } = req.body;

        if (!name || !phoneNo || !password || !role||!email) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, phoneNo, password, or role.',
            });
        }

        // Validate role value
        if (!['admin', 'user'].includes(role)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid role. Allowed values are "admin" or "user".',
            });
        }

        const newUser = new User({ name, phoneNo, password,email, role });
        const result = await newUser.save();
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    } catch (error) {
        console.log('Error adding user', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: error,
        });
    }
};

export const getUser = async (req:Request,res:Response) =>{
    try{
        const {id} = req.params;

        const findUser = User.findById(id);

        if(!findUser){
            return res.status(404).json({
                success: false,
                message: 'User not found',
                });
        }

        return res.status(201).json({
            success: true,
            message: 'User found',
            data: findUser
        });
        }catch(error){
            console.log('Error getting user', error);
            return res.status(500).json({
                success: false,
                message: 'Error getting user',
                error:error
                });
        }
};
export const getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await User.find({}, { password: 0, updatedAt: 0, __v: 0 })
      .sort({ createdAt: -1 }); 
  
      return sendResponse(res, 'Users Data fetched successfully', users);
    } catch (error) {
      console.error(error);
      return sendResponse(res, 'Internal Server Error', null, false, 500);
    }
  };
  
export const updateUser = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const { name,phoneNo,email,password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name,phoneNo,email,password },
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User updated successfully.',
            data: updateUser,
        });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the user.',
        });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'User deleted successfully.',
            data: deletedUser,
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the user.',
        });
    }
};