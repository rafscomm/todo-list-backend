import express from 'express';
import { server } from './database/server';

const app = server

app.listen(3000, ()=>{console.log("Escutando na porta 3000")});