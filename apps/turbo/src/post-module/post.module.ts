import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';

import { PostCategoryModule } from './post-categories/post-category.module';
import { PostController } from './Post.controller';
import { PostService } from './Post.service';
import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    PostCategoryModule,
    //SequelizeModule.forFeature([]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
