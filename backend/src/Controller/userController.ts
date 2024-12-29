import { Request, Response } from 'express';
import User from '../Model/user';

export const addUser = async (req:Request,res:Response) =>{
    try{
        const {name,phoneNo,password} = req.body;

        if (!name || !phoneNo || !password) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, description, or companyId.',
            });
        }

        const newUser = new User({name,phoneNo,password});
        const result = await newUser.save();
        return res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result
            });
    }catch(error){
        console.log('Error adding user', error);
        return res.status(500).json({
            success: false,
            message: 'Error creating user',
            error:error
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

export const updateUser = async (req:Request,res:Response)=>{
    try {
        const { id } = req.params;
        const { name,phoneNo,password } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            { name,phoneNo,password },
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