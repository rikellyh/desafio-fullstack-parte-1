import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';

const listContactService = async (): Promise<Contact[]> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactlist = await contactRepository.find();

  return contactlist;
};

export default listContactService;
