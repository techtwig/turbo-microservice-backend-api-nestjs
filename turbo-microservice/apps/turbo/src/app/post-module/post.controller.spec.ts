import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { WinstonModule } from 'nest-winston';

import { appConfig } from '../core/config/app-config/app-config';
import { MongooseConfigService } from '../core/config/mongoose/mongoose-config.service';
import { WinstonConfigService } from '../core/config/winston/winston-config.service';
import { PostCategoryModule } from './post-categories/post-category.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schema/post.schema';

describe('AppController', () => {
  let postController: PostController;
  let postService: PostService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(appConfig),
        WinstonModule.forRootAsync({
          useClass: WinstonConfigService,
        }),
        MongooseModule.forRootAsync({
          useClass: MongooseConfigService,
        }),
        MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
        PostCategoryModule,
      ],
      controllers: [PostController],
      providers: [PostService],
    }).compile();

    postController = app.get<PostController>(PostController);
    postService = app.get<PostService>(PostService);
  });

  describe('root', () => {
    it('should return "array"', async () => {
      expect(await postController.findAll()).toEqual(
        await postService.findAll(),
      );
    });
  });
});
