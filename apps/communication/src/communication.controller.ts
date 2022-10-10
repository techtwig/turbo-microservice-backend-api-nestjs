import { Controller, Get } from '@nestjs/common';
import { CommunicationService } from './communication.service';

@Controller()
export class CommunicationController {
  constructor(private readonly communicationService: CommunicationService) {}

  @Get()
  getHello(): string {
    return this.communicationService.getHello();
  }
}
