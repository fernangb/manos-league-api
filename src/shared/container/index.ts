/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { container } from 'tsyringe';
import '@modules/positions/providers';
import './providers';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import PositionsRepository from '@modules/positions/infra/typeorm/repositories/PositionsRepository';

container.registerSingleton<IPositionsRepository>(
  'PositionsRepository',
  PositionsRepository,
);
