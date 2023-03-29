import { AppDataSource } from '../../data-source';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/App.error';
import { IContactRequest } from '../../interfaces/contacts';

const createContactService = async (data: IContactRequest) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const numberExists = await contactRepository.findOneBy({
    phone_number: data.phone_number,
  });

  if (numberExists) {
    throw new AppError('Phone Number already exists', 409);
  }

  const emailExists = await contactRepository.findOneBy({
    email: data.email,
  });

  if (emailExists) {
    throw new AppError('Email already exists', 409);
  }

  const createdContact = contactRepository.create(data);
  await contactRepository.save(createdContact);

  return createdContact;
};

export default createContactService;
