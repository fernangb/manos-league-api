import Position from '../infra/typeorm/entities/Position';
import ICreatePositionDTO from '../dtos/ICreatePositionDTO';

export default interface IPositionsRepository {
  create(data: ICreatePositionDTO): Promise<Position>;
  findByName(name: string): Promise<Position | undefined>;
}
