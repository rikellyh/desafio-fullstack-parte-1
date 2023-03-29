import { Request, Response } from 'express';
import { IContactRequest, IContactUpdate } from '../interfaces/contacts';
import createContactService from '../services/contact/createContactService';
import deleteContactService from '../services/contact/deleteContactService';
import listContactByIdService from '../services/contact/listContactByIdService';
import listContactService from '../services/contact/listContactService';
import updateContactService from '../services/contact/updateContactService';

const createContactController = async (req: Request, res: Response) => {
  const data: IContactRequest = req.body;
  const newContact = await createContactService(data);
  return res.status(201).json(newContact);
};

const listContactsController = async (req: Request, res: Response) => {
  const listContacts = await listContactService();
  return res.json(listContacts);
};

const listContactsByIdController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const contact = await listContactByIdService(id);
  return res.status(200).json(contact);
};

const updateContactsController = async (req: Request, res: Response) => {
  const data: IContactUpdate = req.body;
  const id = req.params.id;
  const updateContact = await updateContactService(data, id);
  return res.status(200).json(updateContact);
};

const deleteContactsController = async (req: Request, res: Response) => {
  const id = req.params.id;
  await deleteContactService(id);
  return res.status(204).json();
};

export {
  createContactController,
  listContactsController,
  listContactsByIdController,
  updateContactsController,
  deleteContactsController,
};
