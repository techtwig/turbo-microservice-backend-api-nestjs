import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';

import { UserRegistrationDto } from './dto/create-registration.dto';
import { User } from './model/user.model';

interface Tokens {
  access_token: string;
  refresh_token: string;
}

@Injectable()
export class RegistrationService {
  @InjectModel(User)
  private readonly userModel: typeof User;

  @Inject()
  private readonly jwtService: JwtService;

  @Inject()
  private configService: ConfigService;

  async hashData(data: string) {
    return await bcrypt.hash(data, 10);
  }

  async getTokens(userId: number, email: string): Promise<Tokens> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: 60 * 15,
        },
      ),
      this.jwtService.signAsync(
        { sub: userId, email },
        {
          secret: this.configService.get('JWT_REFRESH_SECRET'),
          expiresIn: 60 * 60 * 24 * 7,
        },
      ),
    ]);

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async updateRtHash(userId, refreshToken) {
    const rtHash = await this.hashData(refreshToken);
    await this.userModel.update(
      { hash_rt: rtHash },
      {
        where: { id: userId },
      },
    );
  }

  async userRegistration(registrationDto: UserRegistrationDto) {
    try {
      const hashedPassword = await this.hashData(registrationDto?.password);

      const user = await this.userModel.create({
        role_id: 1,
        ...registrationDto,
        hash_password: hashedPassword,
      });

      const tokens = await this.getTokens(user.id, user.email);
      await this.updateRtHash(user.id, tokens.refresh_token);
      return tokens;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async validateUser(username, password) {
    const user = await this.userModel.findOne({
      where: {
        username: username,
      },
    });

    if (user) {
      const isValidPassword = await bcrypt.compare(
        password,
        user.hash_password,
      );
      if (isValidPassword) {
        return user;
      }
    }
    return null;
  }

  async userLogin(user) {
    try {
      return this.getTokens(user.id, user.email);
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
