import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';

import { ICreateRentalDTO } from '../dtos/ICreateRentalDTO';
import { Rental } from '../infra/typeorm/entities/Rental';

interface IRentalsRepository {
  create(data: ICreateRentalDTO): Promise<Rental>;
  findOpenRentalByCar(car_id): Promise<Rental>;
  findOpenRentalByUser(user_id): Promise<Rental>;
}

export { IRentalsRepository as IRentalRepository };
