import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { WinstonModule } from 'nest-winston';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appConfig } from './core/config/app-config/app-config';
import { MongooseConfigService } from './core/config/mongoose/mongoose-config.service';
import { SequelizeConfigService } from './core/config/sequelize/sequelize-config.service';
import { WinstonConfigService } from './core/config/winston/winston-config.service';
import { PostModule } from './post-module/post.module';
import { UserModule } from './user-module/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(appConfig),
    WinstonModule.forRootAsync({
      useClass: WinstonConfigService,
    }),
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    }),
    SequelizeModule.forRootAsync({
      useClass: SequelizeConfigService,
    }),
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
