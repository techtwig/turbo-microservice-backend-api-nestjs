import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationService {
  getHello(): string {
    return 'Hello World!';
  }
}
