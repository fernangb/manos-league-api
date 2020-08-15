import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreatePositionService from '@modules/positions/services/CreatePositionService';

export default class PositionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, initials } = request.body;

    const createPosition = container.resolve(CreatePositionService);

    const position = await createPosition.execute({
      name,
      initials,
    });

    return response.json(position);
  }
}
