import { Router } from 'express';
import {
  createContactController,
  deleteContactsController,
  listContactsByIdController,
  listContactsController,
  updateContactsController,
} from '../controllers/contactController';
import ensureAuthMiddleware from '../middlewares/ensureAuthMiddleware';

const contactRoutes = Router();

//criar contatos
contactRoutes.post('', ensureAuthMiddleware, createContactController);

//listar contatos
contactRoutes.get('', listContactsController);

//filtrar contato específico
contactRoutes.get('/:id', ensureAuthMiddleware, listContactsByIdController);

//alterar contato
contactRoutes.patch('/:id', ensureAuthMiddleware, updateContactsController);

//apenas deletar contato
contactRoutes.delete('/:id', ensureAuthMiddleware, deleteContactsController);

export default contactRoutes;
