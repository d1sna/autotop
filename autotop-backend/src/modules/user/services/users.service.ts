import { Injectable } from '@nestjs/common';
import { UserRepository } from '../db/user.repository';

import { UserModel } from '../models/user.model';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createNewUser(creationParams) {
    const model = UserModel.create(creationParams);
    return this.userRepository.insertOne(model);
  }

  async getUserByEmail(email) {
    return this.userRepository.getOneByEmail(email);
  }

  async getUserById(id: string | Types.ObjectId): Promise<UserModel> {
    return this.userRepository.getOneById(new Types.ObjectId(id));
  }
}
