import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/App.error';

const deleteContactService = async (contactId: string): Promise<boolean> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactDeleted = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!contactDeleted) {
    throw new AppError('Contact not found!', 404);
  }

  await contactRepository.remove(contactDeleted);

  return true;
};

export default deleteContactService;
