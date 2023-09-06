import { Injectable } from '@nestjs/common';
import CarRepository from '../db/car.repository';
import CarModel from '../models/car.model';
import { Types } from 'mongoose';

@Injectable()
export default class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async getManyByFilter(filter) {
    console.log({ filter });
    return this.carRepository.getMany(filter);
  }

  async createNew(params) {
    console.log({ params });

    const carModel = new CarModel(new Types.ObjectId());
    return this.carRepository.create(carModel);
  }

  async update(params) {
    console.log({ params });
    return;
  }
}
