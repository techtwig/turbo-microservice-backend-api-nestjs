import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from './model/user.model';
import { UserController } from './private-user.controller';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';
import { RoleModule } from './role-module/role.module';
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { UserService } from './user.service';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    RoleModule,
    PassportModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secretOrPrivateKey: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: 3600,
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [RegistrationController, UserController],
  providers: [
    UserService,
    RegistrationService,
    LocalStrategy,
    JwtStrategy,
    JwtRefreshStrategy,
  ],
})
export class UserModule {}
