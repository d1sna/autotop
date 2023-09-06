import { Module } from '@nestjs/common';
import configure from 'src/configure';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      useValue: new ConfigService(configure),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}
