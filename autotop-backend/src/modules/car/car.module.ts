import { Module } from '@nestjs/common';
import CarService from './services/car.service';
import CarRepository from './db/car.repository';
import CarController from './api/car.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarSchemaDefinition, CarsSchema } from './db/car.schema';
import { CarSchemaFactory } from './db/car.schema.factory';

@Module({
  controllers: [CarController],
  imports: [
    MongooseModule.forFeature([
      {
        name: CarSchemaDefinition.name,
        schema: CarsSchema,
      },
    ]),
  ],
  providers: [CarService, CarRepository, CarSchemaFactory],
  exports: [],
})
export default class CarModule {}
