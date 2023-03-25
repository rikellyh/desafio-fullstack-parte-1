import * as yup from 'yup';
import { IClient, IClientRequest } from '../interfaces/clients';

const clientSerializer: yup.SchemaOf<IClientRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone_number: yup.string().required(),
  password: yup.string().required(),
});

const clientWithoutPasswordSerializer: yup.SchemaOf<IClient> = yup
  .object()
  .shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    phone_number: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  });

export { clientSerializer, clientWithoutPasswordSerializer };
