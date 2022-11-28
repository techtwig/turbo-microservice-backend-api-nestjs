import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './model/role.model';
import { RoleController } from './private-role.controller';
import { RoleService } from './role.service';

@Module({
  imports:[SequelizeModule.forFeature([Role])],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule {}
