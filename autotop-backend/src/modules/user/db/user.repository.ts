import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'src/app/errors/not-found.error';
import { UserModel } from '../models/user.model';
import { UserSchemaDefinition } from './user.schema';
import { UserSchemaFactory } from './user.schema.factory';
import { Types } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserSchemaDefinition.name)
    private readonly model: Model<UserSchemaDefinition>,
    private readonly schemaFactory: UserSchemaFactory,
  ) {}

  async insertOne(model: UserModel) {
    return this.model.create(this.schemaFactory.create(model));
  }

  async getOneByEmail(email): Promise<UserModel> {
    const document = await this.model.findOne({ email });
    if (!document) throw new NotFoundError('Document not found');
    return this.schemaFactory.createFromSchema(document);
  }

  async getOneById(id: Types.ObjectId) {
    const document = await this.model.findOne({ _id: id });
    if (!document) throw new NotFoundError('Document not found');
    return this.schemaFactory.createFromSchema(document);
  }
}
