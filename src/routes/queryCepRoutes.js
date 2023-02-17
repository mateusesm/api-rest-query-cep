import { Router } from 'express';
import QueryCepController from '../controllers/QueryCepController';
import isValidCep from '../middlewares/isValidCep';

const router = new Router();

router.post('/', isValidCep, QueryCepController.query);

export default router;
