import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

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
  }
}

export default new App().app;
