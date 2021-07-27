import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(
    private createSpecificationUserCase: CreateSpecificationUseCase
  ) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationUserCase.execute({ name, description });

    response.status(201).send();
  }
}

export { CreateSpecificationController };
