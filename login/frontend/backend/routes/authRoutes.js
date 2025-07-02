// routes/authRoutes.js
import express from 'express';
import { login, register } from '../controllers/authController.js';
import { validateLogin, validateRegister } from '../middlewares/validateAuth.js';

const router = express.Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);

export default router;