import express from 'express';
import { addUser, deleteUser, getAllUsers, getUser, login, updateUser } from '../Controller/userController';
import { hasAdminAccess, isAuthenticated } from '../middleware/auth';

const router = express.Router();

router
    .route('/auth/login')
    .post(login);
router
    .route('/addUser')
    .post(addUser);
router
    .route('/getUser/:id')
    .get(isAuthenticated,getUser);
router
    .route('/getAllUsers')
    .get(isAuthenticated,hasAdminAccess,getAllUsers);
router
    .route('/updateUser/:id')
    .put(isAuthenticated,hasAdminAccess,updateUser);
router
    .route('/deleteUser/:id')
    .delete(isAuthenticated,hasAdminAccess,deleteUser);

export default router;
