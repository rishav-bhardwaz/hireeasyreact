import express from 'express'
const router = express.Router();

import userRoute from './userRoutes'
import jobRoute from './jobRoutes'
import companyRoute from './companyRoutes'
import applicationRoute from './applicationRoutes'

router.use('/user',userRoute);
router.use('/admin/job',jobRoute);
router.use('/admin/company',companyRoute);
router.use('/user/application',applicationRoute);

export default router;