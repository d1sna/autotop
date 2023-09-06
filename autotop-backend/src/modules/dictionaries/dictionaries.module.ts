import { Module } from '@nestjs/common';
import DictionariesController from './api/dictionaries.controller';

@Module({
  controllers: [DictionariesController],
})
export default class DictionariesModule {}
