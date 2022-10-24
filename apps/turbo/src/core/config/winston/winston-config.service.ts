import {
  WinstonModuleOptions,
  WinstonModuleOptionsFactory,
} from 'nest-winston/dist/winston.interfaces';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';

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
      transports: [
        new winston.transports.File({
          handleExceptions: true,
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          handleExceptions: true,
          filename: 'logs/warn.log',
          level: 'warn',
        }),
        new winston.transports.File({
          handleExceptions: true,
          filename: 'logs/log.log',
          level: 'log',
        }),
        new winston.transports.File({
          handleExceptions: true,
          filename: 'logs/debug.log',
          level: 'debug',
        }),
        new winston.transports.File({
          silent: true,
          handleExceptions: true,
          filename: 'logs/combined.log',
          level: 'info',
        }),
      ],
    };
  }
}
