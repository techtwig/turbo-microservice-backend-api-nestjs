import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from './model/user.model';

@Injectable()
export class UserService {
  @InjectModel(User)
  private readonly userModel: typeof User;

  findAll() {
    return `This action returns all blogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blog`;
  }

  remove(id: number) {
    return `This action removes a #${id} blog`;
  }

  userRegistration(RegistrationDto) {
    return true;
  }
}
