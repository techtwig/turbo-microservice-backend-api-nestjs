import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserRegistrationDto } from './dto/create-registration.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { RegistrationService } from './registration.service';

interface Tokens {
  access_token: string;
  refresh_token: string;
}

@ApiTags('/user')
@Controller('')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post('/registration')
  registration(@Body() registrationDto: UserRegistrationDto): Promise<Tokens> {
    return this.registrationService.userRegistration(registrationDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/sign-in')
  async userLogin(
    @Body() userLoginDto: UserLoginDto,
    @Request() req,
  ): Promise<Tokens> {
    console.log('req.user', req.user);
    return await this.registrationService.userLogin(req.user);
  }

  @Post('/log-out')
  logout(@Body() registrationDto: UserRegistrationDto) {
    return 1;
  }

  @Post('/refresh')
  refreshToken(@Body() registrationDto: UserRegistrationDto) {
    return 1;
  }
}
