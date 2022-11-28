import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiExtraModels, ApiForbiddenResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserRegistrationDto } from './dto/create-registration.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';


@ApiTags('registration')
@Controller('registration')
export class RegistrationController {
  constructor(private readonly userService: UserService) { }


//   @ApiOkResponse({
//     description: 'Registration successfull',
//     type: User
    
// })
@ApiOkResponse({ status: 201, description: 'Registration Successful'})
@ApiForbiddenResponse({ status: 403, description: 'Forbidden.'})
  @Post()
registration(@Body() registrationDto: UserRegistrationDto)
   {
    return this.userService.userRegistration(registrationDto);
  }


}
