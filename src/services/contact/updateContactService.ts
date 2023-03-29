import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/App.error';
import { IContact, IContactUpdate } from '../../interfaces/contacts';

const updateContactService = async (
  data: IContactUpdate,
  contactId: string
): Promise<IContact> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactById = await contactRepository.findOneBy({
    id: contactId,
  });

  if (!contactById) {
    throw new AppError('Contact not found', 404);
  }

  const updateContact = contactRepository.create({
    ...contactById,
    ...data,
  });
  await contactRepository.save(updateContact);

  return updateContact;
};

export default updateContactService;
