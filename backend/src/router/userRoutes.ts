import express from 'express';
import { addUser, deleteUser, getUser, updateUser } from '../Controller/userController';

const router = express.Router();

router
    .route('/addUser')
    .post(addUser);
router
    .route('/getUser')
    .post(getUser);
router
    .route('/updateUser')
    .post(updateUser);
router
    .route('/deleteUser')
    .post(deleteUser);

export default router;
