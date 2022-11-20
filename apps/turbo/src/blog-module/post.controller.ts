import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-Post.dto';
import { UpdatePostDto } from './dto/update-Post.dto';
import { PostService } from './post.service';

@ApiTags('public/posts')
@Controller('posts')
export class PostController {
  @Inject()
  private readonly postService: PostService;

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
   // return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    //return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
   // return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
   // return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
  //  return this.postService.remove(+id);
  }
}
