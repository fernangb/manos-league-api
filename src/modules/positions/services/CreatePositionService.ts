import { injectable, inject } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Position from '../infra/typeorm/entities/Position';
import IPositionsRepository from '../repositories/IPositionsRepository';

interface IRequest {
  name: string;
  initials: string;
}

@injectable()
class CreatePositionService {
  constructor(
    @inject('PositionsRepository')
    private positionsRepository: IPositionsRepository,
  ) {}

  public async execute({ name, initials }: IRequest): Promise<Position> {
    const findPosition = await this.positionsRepository.findByName(name);

    if (findPosition) {
      throw new AppError('This position already exists');
    }

    const position = await this.positionsRepository.create({
      name,
      initials,
    });

    return position;
  }
}

export default CreatePositionService;
