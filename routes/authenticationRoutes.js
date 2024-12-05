import express from 'express';
import { login, publicAuth, protectedAuth } from '../controllers/authenticationController.js';
import { authenticate } from '../passportConfig.js';
const router = express.Router();

router.post('/authentication/login', login);
router.get('/authentication/public', publicAuth);
router.get('/authentication/protected', authenticate, protectedAuth);

export default router;