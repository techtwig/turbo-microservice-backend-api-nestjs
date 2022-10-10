import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationController } from './communication.controller';
import { CommunicationService } from './communication.service';

describe('CommunicationController', () => {
  let communicationController: CommunicationController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommunicationController],
      providers: [CommunicationService],
    }).compile();

    communicationController = app.get<CommunicationController>(CommunicationController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(communicationController.getHello()).toBe('Hello World!');
    });
  });
});
