import express from 'express';
import { addApplication, deleteApplication, getAllApplication, getApplication, updateApplication } from '../Controller/applicationController';

const router = express.Router();

router
    .route('/addApplication')
    .post(addApplication);
router
    .route('/getApplications')
    .get(getAllApplication);
router
    .route('/getApplication/:id')
    .get(getApplication);
router
    .route('/updateAplication/:id')
    .put(updateApplication);
router
    .route('/deleteApplication/:id')
    .delete(deleteApplication);

export default router;
