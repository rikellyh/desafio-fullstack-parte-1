export interface IClientRequest {
  name: string;
  email: string;
  phone_number: string;
  password: string;
}

export interface IClient {
  id: string;
  name: string;
  phone_number: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate {
  email?: string;
  name?: string;
  password?: string;
  phone_number?: string;
}
