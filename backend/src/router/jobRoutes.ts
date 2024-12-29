import express from 'express';
import { addJob, deleteJob, getJob, updateJob } from '../Controller/jobController';

const router = express.Router();

router
    .route('/addJob')
    .post(addJob);
router
    .route('/getJob')
    .post(getJob);
router
    .route('/updateJob')
    .post(updateJob);
router
    .route('/deleteJob')
    .post(deleteJob);

export default router;
