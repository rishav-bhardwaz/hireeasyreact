import express from 'express'
const router = express.Router();

import userRoute from './userRoutes'
import jobRoute from './jobRoutes'
import companyRoute from './companyRoutes'

router.use('/user',userRoute);
router.use('/admin/job',jobRoute);
router.use('/admin/company',companyRoute);

export default router;