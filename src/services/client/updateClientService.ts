import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { AppError } from '../../errors/App.error';
import { IClient, IClientUpdate } from '../../interfaces/clients';

const updateClientService = async (
  data: IClientUpdate,
  clientId: string
): Promise<IClient> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientById = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!clientById) {
    throw new AppError('Client not found', 404);
  }

  const updateClient = clientRepository.create({
    ...clientById,
    ...data,
  });
  await clientRepository.save(updateClient);

  const { password, ...rest } = updateClient;

  return rest;
};

export default updateClientService;
