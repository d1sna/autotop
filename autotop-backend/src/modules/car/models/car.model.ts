import { Types } from 'mongoose';
import { CarSchemaDefinition } from '../db/car.schema';

export default class CarModel {
  public readonly id: Types.ObjectId;

  constructor(id) {
    this.id = id;
  }

  public static createFromDataBase(document: CarSchemaDefinition) {
    return new CarModel(document._id);
  }
}
