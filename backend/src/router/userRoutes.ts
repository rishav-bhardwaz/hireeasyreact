import express from 'express';
import { addUser, deleteUser, getAllUsers, getUser, login, updateUser } from '../Controller/userController';

const router = express.Router();

router
    .route('/login')
    .post(login);
router
    .route('/addUser')
    .post(addUser);
router
    .route('/getUser')
    .get(getUser);
router
    .route('/getAllUsers')
    .get(getAllUsers);
router
    .route('/updateUser')
    .put(updateUser);
router
    .route('/deleteUser')
    .delete(deleteUser);

export default router;
