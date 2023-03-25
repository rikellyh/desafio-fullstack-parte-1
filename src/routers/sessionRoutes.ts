import { Router } from 'express';
import { loginController } from '../controllers/loginController';

const loginRoutes = Router();

//login
loginRoutes.post('', loginController);

export default loginRoutes;
