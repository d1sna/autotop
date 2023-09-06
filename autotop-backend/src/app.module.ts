import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from './app/config/config.module';
import { DatabaseModule } from './app/database/database.module';
import { UsersModule } from './modules/user/user.module';
import CarModule from './modules/car/car.module';
import DictionariesModule from './modules/dictionaries/dictionaries.module';

@Module({
  imports: [
    DatabaseModule.register(),
    AuthModule,
    ConfigModule,
    UsersModule,
    CarModule,
    DictionariesModule,
  ],
})
export class AppModule {}
