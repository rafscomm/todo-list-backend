import express from 'express';
import { route } from '../routes';

const server = express();

server.use(route);


export {server}