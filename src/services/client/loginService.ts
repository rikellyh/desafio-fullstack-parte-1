import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { compare } from 'bcryptjs';

import { AppError } from '../../errors/App.error';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { IClientLogin } from '../../interfaces/clients';

const createLoginService = async ({
  email,
  password,
}: IClientLogin): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({
    email: email,
  });

  if (!client) {
    throw new AppError('Client or password invalid', 403);
  }

  const passwordMatch = await compare(password, client.password);

  if (!passwordMatch) {
    throw new AppError('Client or password invalid', 403);
  }

  const payload = {
    email: client.email,
  };

  const secret = process.env.SECRET_KEY;

  const options = {
    subject: client.id,
    expiresIn: '24h',
  };

  const token = jwt.sign(payload, secret, options);

  return token;
};

export default createLoginService;
