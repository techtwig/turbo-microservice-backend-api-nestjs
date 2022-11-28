import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UserController } from './private-user.controller';
import { RegistrationController } from './registration.controller';
import { RoleModule } from './role-module/role.module';
import { UserService } from './user.service';

@Module({
  imports: [SequelizeModule.forFeature([User]), RoleModule],
  controllers: [RegistrationController,UserController],
  providers: [UserService],
})
export class UserModule { }
