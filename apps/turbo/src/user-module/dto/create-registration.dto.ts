import { ApiProperty } from "@nestjs/swagger";

export class UserRegistrationDto {
@ApiProperty()
first_name: string;

@ApiProperty()
last_name: string;

@ApiProperty()
username: string;

@ApiProperty()
email: string;

@ApiProperty()
password: string;

@ApiProperty()
about_me: string;

// @ApiProperty()
// email_verified: string;
}
