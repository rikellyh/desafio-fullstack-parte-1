import { Router } from 'express';
import { createClientController } from '../controllers/userController';

const clientRoutes = Router();

//cadastro
clientRoutes.post('', createClientController);

//listar contatos
clientRoutes.get('');

//filtrar contato específico
clientRoutes.get('/:id');

//alterar contato e alterar a si mesmo
clientRoutes.patch('/:id');

//apenas deletar contato
clientRoutes.delete('/:id');

export default clientRoutes;
