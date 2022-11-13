import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { BlogCategoryModule } from './blog-categories/blog-category.module';
import { Blog } from './models/blog.model';

@Module({
  imports: [BlogCategoryModule, SequelizeModule.forFeature([Blog])],
  controllers: [],
  providers: [],
})
export class BlogModule { }
