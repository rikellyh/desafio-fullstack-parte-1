import 'dotenv/config';
import 'reflect-metadata';

import { DataSource } from 'typeorm';
import { Client } from '../src/entities/client.entity';
import { Contact } from '../src/entities/contact.entity';
import { initial1679716095185 } from '../src/migrations/1679716095185-initial';

const AppDataSource = new DataSource(
  process.env.NODE_ENV == 'test'
    ? {
        type: 'sqlite',
        database: ':memory:',
        synchronize: true,
        entities: ['src/entities/*.ts'],
      }
    : {
        type: 'postgres',
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT!),
        synchronize: false,
        logging: true,
        entities: [Client, Contact],
        migrations: [initial1679716095185],
      }
);

export { AppDataSource };
