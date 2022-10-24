import { Module } from '@nestjs/common';

import { BlogCategoryModule } from './blog-categories/blog-category.module';

@Module({
  imports: [BlogCategoryModule],
  controllers: [],
  providers: [],
})
export class BlogModule {}
