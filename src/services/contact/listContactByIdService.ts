import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/App.error';
import { IContact } from '../../interfaces/contacts';

const listContactByIdService = async (contactId: string): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContactId = await contactRepository.findOneBy({
    id: contactId,
  });
  console.log(findContactId);

  if (!findContactId) {
    throw new AppError('Contact not found', 404);
  }
  console.log(findContactId);
  return findContactId;
};

export default listContactByIdService;
