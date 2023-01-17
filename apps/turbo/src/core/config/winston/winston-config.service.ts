import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  WinstonModuleOptions,
  WinstonModuleOptionsFactory,
} from 'nest-winston/dist/winston.interfaces';
import * as winston from 'winston';
import * as Transport from 'winston-transport';

class CustomTransport extends Transport {
  constructor(opts) {
    super(opts);
  }

  log(info, callback) {
    setImmediate(() => {
      // setTimeout(() => {
      //console.log('log-info', info);
      // }, 1000);
    });
    callback();
  }
}

@Injectable()
export class WinstonConfigService implements WinstonModuleOptionsFactory {
  @Inject()
  private configService: ConfigService;

  createWinstonModuleOptions():
    | Promise<WinstonModuleOptions>
    | WinstonModuleOptions {
    return {
      exceptionHandlers: [
        new winston.transports.File({ filename: 'logs/exceptions.log' }),
      ],
      rejectionHandlers: [
        new winston.transports.File({ filename: 'logs/rejections.log' }),
      ],
      format: winston.format.combine(
        winston.format.simple(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(
          (info) => `[${info.timestamp}] ${info.level} ${info.message}`,
        ),
      ),
      transports: [new CustomTransport({})],
    };
  }
}
