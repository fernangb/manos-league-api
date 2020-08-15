import { getRepository, Repository } from 'typeorm';
import IPositionsRepository from '@modules/positions/repositories/IPositionsRepository';
import ICreatePositionDTO from '@modules/positions/dtos/ICreatePositionDTO';
import Position from '../entities/Position';

class PositionsRepository implements IPositionsRepository {
  private ormRepository: Repository<Position>;

  constructor() {
    this.ormRepository = getRepository(Position);
  }

  public async findByName(name: string): Promise<Position | undefined> {
    const findPosition = await this.ormRepository.findOne({
      where: { name },
    });

    return findPosition;
  }

  public async create({
    name,
    initials,
  }: ICreatePositionDTO): Promise<Position> {
    const position = this.ormRepository.create({ name, initials });

    await this.ormRepository.save(position);

    return position;
  }
}

export default PositionsRepository;
