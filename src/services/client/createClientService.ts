import 'dotenv/config';
import { hashSync } from 'bcryptjs';
import { AppDataSource } from '../../data-source';

import { Client } from '../../entities/client.entity';
import { IClientRequest } from '../../interfaces/clients/index';
import { clientWithoutPasswordSerializer } from '../../serializers/client.serializers';
import { AppError } from '../../errors/App.error';

const createClientService = async ({
  email,
  password,
  name,
  phone_number,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const emailExists = await clientRepository.findOneBy({ email });

  if (emailExists) {
    throw new AppError('Email already exists', 400);
  }

  const phoneExists = await clientRepository.findOneBy({ phone_number });

  if (phoneExists) {
    throw new AppError('Phone Number already exists', 400);
  }

  const client = new Client();
  client.name = name;
  client.email = email;
  client.phone_number = phone_number;
  client.password = hashSync(password, 10);

  const createdClient = clientRepository.create(client);

  await clientRepository.save(createdClient);

  const responseCreateClient = await clientWithoutPasswordSerializer.validate(
    createdClient,
    {
      stripUnknown: true,
    }
  );

  return responseCreateClient;
};

export default createClientService;
