import { Request, Response } from 'express';
import { IClientLogin } from '../interfaces/clients';
import createLoginService from '../services/client/loginService';

const loginController = async (req: Request, res: Response) => {
  const sessionData: IClientLogin = req.body;
  const token = await createLoginService(sessionData);
  return res.status(200).json({ token });
};

export { loginController };
