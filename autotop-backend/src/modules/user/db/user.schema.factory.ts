import { ISchemaFactory } from '../../../app/interfaces/schema-factory.interface';
import { UserModel } from '../models/user.model';
import { UserSchemaDefinition } from './user.schema';

export class UserSchemaFactory
  implements ISchemaFactory<UserModel, UserSchemaDefinition>
{
  create(entity: UserModel): UserSchemaDefinition {
    return {
      _id: entity.id,
      email: entity.email,
      passwordHash: entity.passwordHash,
      fullName: entity.fullName,
    } as UserSchemaDefinition;
  }

  createFromSchema(schema: UserSchemaDefinition): UserModel {
    return UserModel.createFromDataBase({
      _id: schema._id,
      passwordHash: schema.passwordHash,
      email: schema.email,
      fullName: schema.fullName,
    });
  }
}
