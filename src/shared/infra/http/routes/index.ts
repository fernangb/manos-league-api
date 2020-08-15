import { Router } from 'express';
import positionsRouter from '@modules/positions/infra/http/routes/positions.routes';

const routes = Router();

routes.use('/positions', positionsRouter);

export default routes;
