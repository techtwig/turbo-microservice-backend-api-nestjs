import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostCategoryController } from './post-category.controller';
import { PostCategoryService } from './post-category.service';
import {
  PostCategory,
  PostCategorySchema,
} from './schema/post-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PostCategory.name, schema: PostCategorySchema },
    ]),
  ],
  controllers: [PostCategoryController],
  providers: [PostCategoryService],
})
export class PostCategoryModule {}
