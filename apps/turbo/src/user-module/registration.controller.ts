import { Body, Controller, Post } from '@nestjs/common';
import { ApiForbiddenResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UserRegistrationDto } from './dto/create-registration.dto';
import { UserService } from './user.service';

@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly userService: UserService) {}

  //   @ApiOkResponse({
  //     description: 'Registration successful',
  //     type: User

  // })
  @ApiOkResponse({ status: 201, description: 'Registration Successful' })
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  registration(@Body() registrationDto: UserRegistrationDto) {
    return this.userService.userRegistration(registrationDto);
  }
}
