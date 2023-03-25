import 'dotenv/config';
import { hashSync } from 'bcryptjs';
import { AppDataSource } from '../../data-source';

import { Client } from '../../entities/client.entity';
import { IClientRequest } from '../../interfaces/clients/index';
import { clientWithoutPasswordSerializer } from '../../serializers/client.serializers';

const createClientService = async ({
  email,
  password,
  name,
  phone_number,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = new Client();
  client.name = name;
  client.email = email;
  client.phone_number = phone_number;
  client.password = hashSync(password, 10);

  const createdClient = clientRepository.create(client);

  await clientRepository.save(createdClient);

  const clientWithoutPassord = await clientWithoutPasswordSerializer.validate(
    createdClient,
    {
      stripUnknown: true,
    }
  );

  return clientWithoutPassord;
};

export default createClientService;
