import express from 'express';
import { addCompany, deleteCompany, getAllCompany, getCompany, updateCompany } from '../Controller/companyController';

const router = express.Router();

router
    .route('/addCompany')
    .post(addCompany);
router
    .route('/getcompanies')
    .get(getAllCompany);
router
    .route('/getCompany/:id')
    .get(getCompany);
router
    .route('/updateCompany/:id')
    .put(updateCompany);
router
    .route('/deleteCompany/:id')
    .delete(deleteCompany);

export default router;
