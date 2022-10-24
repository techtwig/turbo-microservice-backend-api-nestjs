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
      dialect: 'mysql',
      host: this.configService.get<string>('MYSQL_DB_HOST'),
      port: this.configService.get<number>('MYSQL_DB_PORT'),
      username: this.configService.get<string>('MYSQL_DB_USERNAME'),
      password: this.configService.get<string>('MYSQL_DB_PASSWORD'),
      database: this.configService.get<string>('MYSQL_DB_DATABASE'),
      autoLoadModels: true,
      synchronize: false, //auto migration
      // logging: false,
    };
  }
}
