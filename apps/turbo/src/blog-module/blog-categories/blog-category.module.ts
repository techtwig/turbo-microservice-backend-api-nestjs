import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BlogCategoryController } from './blog-category.controller';
import { BlogCategoryService } from './blog-category.service';
import {
  BlogCategory,
  BlogCategorySchema,
} from './schema/blog-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BlogCategory.name, schema: BlogCategorySchema },
    ]),
  ],
  controllers: [BlogCategoryController],
  providers: [BlogCategoryService],
})
export class BlogCategoryModule {}
