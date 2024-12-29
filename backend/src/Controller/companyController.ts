import { Request, Response } from 'express';
import Company from '../Model/company';

export const addCompany = async (req: Request, res: Response) => {
    try {
        const { name, description, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, description, or email.',
            });
        }

        const newCompany = new Company({
            name,
            description,
            email,
            password
        });

        const savedCompany = await newCompany.save();

        return res.status(201).json({
            success: true,
            message: 'Company added successfully.',
            data: savedCompany,
        });
    } catch (error) {
        console.error('Error adding Company:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while adding the Company.',
        });
    }
};

export const getCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const findCompany = await Company.findById(id);

        if (!findCompany) {
            return res.status(404).json({
                success: false,
                message: 'Company not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Company found.',
            data: findCompany,
        });
    } catch (error) {
        console.error('Error finding Company:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while finding the Company.',
        });
    }
};

export const deleteCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedCompany = await Company.findByIdAndDelete(id);

        if (!deletedCompany) {
            return res.status(404).json({
                success: false,
                message: 'Company not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Company deleted successfully.',
            data: deletedCompany,
        });
    } catch (error) {
        console.error('Error deleting Company:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the Company.',
        });
    }
};

export const updateCompany = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, email,password } = req.body;

        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            { name, description, email,password },
            { new: true } 
        );

        if (!updatedCompany) {
            return res.status(404).json({
                success: false,
                message: 'Company not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Company updated successfully.',
            data: updatedCompany,
        });
    } catch (error) {
        console.error('Error updating Company:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the Company.',
        });
    }
};
