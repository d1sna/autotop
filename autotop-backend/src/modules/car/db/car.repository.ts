import { InjectModel } from '@nestjs/mongoose';
import { CarSchemaDefinition } from './car.schema';
import { Model } from 'mongoose';
import { CarSchemaFactory } from './car.schema.factory';
import CarModel from '../models/car.model';
import { NotFoundError } from 'src/app/errors/not-found.error';

export default class CarRepository {
  constructor(
    @InjectModel(CarSchemaDefinition.name)
    private readonly model: Model<CarSchemaDefinition>,
    private readonly schemaFactory: CarSchemaFactory,
  ) {}

  async create(carModel: CarModel) {
    return this.model.create(this.schemaFactory.create(carModel));
  }

  async getMany(filter): Promise<CarModel[]> {
    const documents = await this.model.find(filter);
    return documents.map((doc) => this.schemaFactory.createFromSchema(doc));
  }

  async getById(id) {
    const document = await this.model.findOne({ _id: id });
    if (!document) throw new NotFoundError('Document not found');
    return this.schemaFactory.createFromSchema(document);
  }

  async updateOne(filter, carModel: CarModel) {
    return this.model.updateOne(filter, carModel);
  }
}
