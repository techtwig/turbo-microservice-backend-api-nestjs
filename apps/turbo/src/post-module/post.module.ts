import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostCategoryModule } from './post-categories/post-category.module';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    PostCategoryModule,
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
