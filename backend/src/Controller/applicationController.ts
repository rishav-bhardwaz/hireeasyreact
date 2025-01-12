import { Request, Response } from 'express';
import Job from '../Model/job';
import { sendResponse } from '../utils/responseUtils';
import Application from '../Model/applications';

export const addApplication = async (req: Request, res: Response) => {
    try {
        const { userName, resume, jobId } = req.body;

        if (!userName || !resume || !jobId) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields.',
            });
        }

        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(400).json({
                success: false,
                message: 'Invalid job ID.',
            });
        }

        const newApplication= new Application({
            userName,
            resume,
            jobId,
        });

        const savedApplication = await newApplication.save();

        return res.status(201).json({
            success: true,
            message: 'Application added successfully.',
            data: savedApplication,
        });
    } catch (error) {
        console.error('Error adding Application:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while adding the Application.',
        });
    }
};

export const getApplication = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const findApplication = await Application.findById(id);

        if (!findApplication) {
            return res.status(404).json({
                success: false,
                message: 'Application not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Application found.',
            data: findApplication,
        });
    } catch (error) {
        console.error('Error finding Application:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while finding the Application.',
        });
    }
};
export const getAllApplication = async (req: Request, res: Response) => {
    try {
      const applications = await Application.find({}, { updatedAt: 0, __v: 0 })
      .sort({ createdAt: -1 }); 
  
      return sendResponse(res, 'Application Data fetched successfully', applications);
    } catch (error) {
      console.error(error);
      return sendResponse(res, 'Internal Server Error', null, false, 500);
    }
  };

export const deleteApplication = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedApplication = await Application.findByIdAndDelete(id);

        if (!deletedApplication) {
            return res.status(404).json({
                success: false,
                message: 'Application not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Application deleted successfully.',
            data: deletedApplication,
        });
    } catch (error) {
        console.error('Error deleting Application:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the Application.',
        });
    }
};

export const updateApplication = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userName, resume, jobId } = req.body;

        const updatedApplication = await Application.findByIdAndUpdate(
            id,
            { resume },
            { new: true } 
        );

        if (!updatedApplication) {
            return res.status(404).json({
                success: false,
                message: 'Application not found.',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Application updated successfully.',
            data: updatedApplication,
        });
    } catch (error) {
        console.error('Error updating Application:', error);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the Application.',
        });
    }
};
