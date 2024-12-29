import express from 'express';
import { addCompany, deleteCompany, getCompany, updateCompany } from '../Controller/companyController';

const router = express.Router();

router
    .route('/addCompany')
    .post(addCompany);
router
    .route('/getCompany')
    .post(getCompany);
router
    .route('/updateCompany')
    .post(updateCompany);
router
    .route('/deleteCompany')
    .post(deleteCompany);

export default router;
