import { ISchemaFactory } from '../../../app/interfaces/schema-factory.interface';
import CarModel from '../models/car.model';
import { CarSchemaDefinition } from './car.schema';

export class CarSchemaFactory
  implements ISchemaFactory<CarModel, CarSchemaDefinition>
{
  create(entity: CarModel): CarSchemaDefinition {
    return {
      _id: entity.id,
      // phone: entity.phone,
      // passwordHash: entity.passwordHash,
      // fullName: entity.fullName,
    } as CarSchemaDefinition;
  }

  createFromSchema(schema: CarSchemaDefinition): CarModel {
    return CarModel.createFromDataBase({
      _id: schema._id,
      // passwordHash: schema.passwordHash,
      // phone: schema.phone,
      // fullName: schema.fullName,
    });
  }
}
