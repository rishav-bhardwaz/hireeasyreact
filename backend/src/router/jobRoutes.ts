import express from 'express';
import { addJob, deleteJob, getAllJobs, getJob, updateJob } from '../Controller/jobController';

const router = express.Router();

router
    .route('/addJob')
    .post(addJob);
router
    .route('/getjobs')
    .get(getAllJobs);
router
    .route('/getJob/:jobId')
    .get(getJob);
router
    .route('/updateJob/:jobId')
    .put(updateJob);
router
    .route('/deleteJob/:jobId')
    .delete(deleteJob);

export default router;
