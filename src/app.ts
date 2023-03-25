import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import handleError from './errors/handleError';
import clientRoutes from './routers/clientRoutes';
import loginRoutes from './routers/sessionRoutes';

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/profile', clientRoutes);
app.use('/login', loginRoutes);

app.use(handleError);

export default app;
