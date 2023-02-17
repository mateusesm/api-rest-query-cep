import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import swaggerUi from 'swagger-ui-express';

import swaggerDocument from '../swagger.json';

import queryCepRoutes from './routes/queryCepRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/consulta-endereco', queryCepRoutes);
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new App().app;
