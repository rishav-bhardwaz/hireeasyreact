import { Request, Response } from 'express';
import Job from '../Model/job';
import Company from '../Model/company';

export const addJob = async (req: Request, res: Response) => {
    try {
        const { name, description, active, companyId } = req.body;

        if (!name || !description || !companyId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: name, description, or companyId.',
            });
        }

        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(400).json({
                success: false,
                message: 'Invalid company ID.',
            });
        }

        const newJob = new Job({
            name,
            description,
            active: active ?? true,
            companyId,
        });

        const savedJob = await newJob.save();

        return res.status(201).json({
            success: true,
            message: 'Job added successfully.',
            data: savedJob,
        });
    } catch (error) {
        console.error('Error adding job:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while adding the job.',
        });
    }
};

export const getJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params;

        const findJob = await Job.findById(jobId);

        if (!findJob) {
            return res.status(404).json({
                success: false,
                message: 'Job not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Job found.',
            data: findJob,
        });
    } catch (error) {
        console.error('Error finding job:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while finding the job.',
        });
    }
};

export const deleteJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params;

        const deletedJob = await Job.findByIdAndDelete(jobId);

        if (!deletedJob) {
            return res.status(404).json({
                success: false,
                message: 'Job not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Job deleted successfully.',
            data: deletedJob,
        });
    } catch (error) {
        console.error('Error deleting job:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the job.',
        });
    }
};

export const updateJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params;
        const { name, description, active } = req.body;

        const updatedJob = await Job.findByIdAndUpdate(
            jobId,
            { name, description, active },
            { new: true } 
        );

        if (!updatedJob) {
            return res.status(404).json({
                success: false,
                message: 'Job not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Job updated successfully.',
            data: updatedJob,
        });
    } catch (error) {
        console.error('Error updating job:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the job.',
        });
    }
};
