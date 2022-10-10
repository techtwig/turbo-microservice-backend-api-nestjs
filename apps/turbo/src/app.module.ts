import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        ENVIRONMENT: Joi.string().required(),
        MYSQL_DB_HOST: Joi.string().required(),
        MYSQL_DB_PORT: Joi.string().required(),
        MYSQL_DB_USERNAME: Joi.string().required(),
        MYSQL_DB_PASSWORD: Joi.string().required(),
        MYSQL_DB_DATABASE: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
