import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

import { AppEnvironment, ConfigKey } from '../app-config/app-config';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  @Inject()
  private configService: ConfigService;

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'mysql',
      host: this.configService.get<string>(ConfigKey.MYSQL_DB_HOST),
      port: this.configService.get<number>(ConfigKey.MYSQL_DB_PORT),
      username: this.configService.get<string>(ConfigKey.MYSQL_DB_USERNAME),
      password: this.configService.get<string>(ConfigKey.MYSQL_DB_PASSWORD),
      database: this.configService.get<string>(ConfigKey.MYSQL_DB_DATABASE),
      autoLoadModels: true,
      synchronize:
        this.configService.get<string>(ConfigKey.APP_ENV) !=
        AppEnvironment.PROD, //auto migration
      logging: [
        AppEnvironment.LOCAL,
        AppEnvironment.STAGE,
        AppEnvironment.PROD,
      ].includes(this.configService.get(ConfigKey.APP_ENV))
        ? console.log
        : false,
    };
  }
}
