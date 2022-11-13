import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  @Inject()
  private configService: ConfigService;

  createSequelizeOptions(): SequelizeModuleOptions {
    return {
      dialect: 'postgres',
      host: this.configService.get<string>('PGSQL_DB_HOST'),
      port: this.configService.get<number>('PGSQL_DB_PORT'),
      username: this.configService.get<string>('PGSQL_DB_USERNAME'),
      password: this.configService.get<string>('PGSQL_DB_PASSWORD'),
      database: this.configService.get<string>('PGSQL_DB_DATABASE'),
      autoLoadModels: true,
      synchronize: true, //auto migration
      // logging: false,
    };
  }
}
