import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  @Inject()
  private configService: ConfigService;

  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this.configService.get<string>('MONGODB_URI'),
      autoIndex: true,
    };
  }
}
