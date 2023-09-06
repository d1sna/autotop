import { Logger } from '@nestjs/common';
import { keys } from 'lodash';
import { IConfigure } from 'src/configure';

export class ConfigService {
  private readonly logger: Logger;
  constructor(private readonly configure: IConfigure) {
    this.logger = new Logger(ConfigService.name);
    keys(configure).forEach((envItemName) => {
      if (!configure[envItemName])
        throw new Error(`Not found env item [${envItemName}]`);
    });
    this.logger.log('> ALL ENV INITIALIZED');
  }

  get(key: keyof IConfigure) {
    return this.configure[key];
  }
}
