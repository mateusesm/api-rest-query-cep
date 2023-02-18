import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

const router = new Router();

router.get('/', swaggerUi.setup(swaggerDocument));

export default router;
