import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

import { JoiValidationExceptionFilter } from './joi-validation-exception.filter';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    Logger.error('exception', exception);

    let errors: any;

    if (exception instanceof JoiValidationExceptionFilter) {
      errors = {};
      const response: any = exception.getResponse();
      (response.message || []).forEach((message) => {
        try {
          const re = new RegExp('(^\\"\\w+\\")');
          const matches = re.exec(message);
          const fieldName = matches[0].replace('"', '').replace('"', '');
          errors[fieldName] = [];
          errors[fieldName].push(message);
        } catch (e) {
          console.log(e);
        }
      });
    }

    const responseObject: any = {
      statusCode:
        exception instanceof JoiValidationExceptionFilter
          ? HttpStatus.BAD_REQUEST
          : status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message:
        exception instanceof HttpException
          ? this.getErrorMessage(exception)
          : 'Internal server error',
    };

    if (typeof errors != 'undefined') {
      responseObject.errors = errors;
    }

    Logger.error('exception', exception);
    console.error('exception', exception);

    try {
      responseObject.dev_note = exception.toString();
    } catch (e) {}

    return response.status(status).json(responseObject);
  }

  getErrorMessage(exception: any) {
    return exception.response?.message || 'Internal server error';
  }
}
