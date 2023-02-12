import { BadRequestException } from '@nestjs/common';

export class JoiValidationExceptionFilter extends BadRequestException {
  constructor(objectOrError?: string | object | any, description?: string) {
    super(objectOrError, description);
  }
}
