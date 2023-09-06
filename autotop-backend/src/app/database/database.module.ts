import { DynamicModule, Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseModuleAsyncOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';

@Module({})
export class DatabaseModule {
  static register(): DynamicModule {
    const db = MongooseModule.forRootAsync(getConnectionOptions());

    return {
      module: DatabaseModule,
      imports: [db],
      controllers: [],
      providers: [],
      exports: [],
    };
  }
}

export function getConnectionOptions() {
  return {
    connectionFactory: (connection) => {
      const logger = new Logger('DatabaseModule');
      connection.on('connected', () => {
        logger.log('is connected');
      });
      connection.on('disconnected', () => {
        logger.log('DB disconnected');
      });
      connection.on('error', (error) => {
        logger.log('DB connection failed! for error: ', error.message);
      });
      return connection;
    },
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => {
      return {
        // autoIndex: !config.isProd,
        uri: configService.get('MONGO_URL'),
      };
    },
    inject: [ConfigService],
  } as MongooseModuleAsyncOptions;
}
