import { Router } from 'express';
import {
  createClientController,
  updateClientController,
} from '../controllers/userController';
import ensureAuthMiddleware from '../middlewares/ensureAuthMiddleware';
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValidMiddleware';
import { clientSerializer } from '../serializers/client.serializers';

const clientRoutes = Router();

//cadastro
clientRoutes.post(
  '',
  ensureDataIsValidMiddleware(clientSerializer),
  createClientController
);

//alterar a si mesmo
clientRoutes.patch('/:id', ensureAuthMiddleware, updateClientController);

export default clientRoutes;
