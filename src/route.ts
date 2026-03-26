import { Router } from 'express';
import { getNote, postNote } from './controller.js';

export const routes = Router();

routes.get('/note', getNote);
routes.post('/note', postNote);
