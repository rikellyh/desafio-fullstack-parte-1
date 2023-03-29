import { Request, Response } from 'express';
import { IClientRequest, IClientUpdate } from '../interfaces/clients';
import createClientService from '../services/client/createClientService';
import updateClientService from '../services/client/updateClientService';

const createClientController = async (req: Request, res: Response) => {
  const clientData: IClientRequest = req.body;
  const newClient = await createClientService(clientData);
  return res.status(201).json(newClient);
};

const updateClientController = async (req: Request, res: Response) => {
  const clientData: IClientUpdate = req.body;
  const clientId = req.params.id;
  const updatedClient = await updateClientService(clientData, clientId);
  return res.status(200).json(updatedClient);
};

export { createClientController, updateClientController };
