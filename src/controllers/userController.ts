import { Request, Response } from 'express';
import { IClientRequest } from '../interfaces/clients';
import createClientService from '../services/client/createClientService';

const createClientController = async (req: Request, res: Response) => {
  const clientData: IClientRequest = req.body;
  const newClient = await createClientService(clientData);
  return res.status(201).json(newClient);
};

export { createClientController };
