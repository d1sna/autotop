import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './db/user.repository';
import { UsersSchema, UserSchemaDefinition } from './db/user.schema';
import { UserSchemaFactory } from './db/user.schema.factory';
import { UserService } from './services/users.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserSchemaDefinition.name,
        schema: UsersSchema,
      },
    ]),
  ],
  providers: [UserService, UserRepository, UserSchemaFactory],
  exports: [UserService],
})
export class UsersModule {}
