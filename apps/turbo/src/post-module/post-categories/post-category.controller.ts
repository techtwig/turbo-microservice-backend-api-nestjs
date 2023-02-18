import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';
import { PostCategoryService } from './post-category.service';

@ApiTags('public/post-categories')
@Controller('public/post-categories')
export class PostCategoryController {
  @Inject()
  private readonly postCategoryService: PostCategoryService;

  @Post()
  create(@Body() createPostCategoryDto: CreatePostCategoryDto) {
    return this.postCategoryService.create(createPostCategoryDto);
  }

  @Get()
  findAll() {
    return this.postCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postCategoryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updatePostCategoryDto: UpdatePostCategoryDto,
  ) {
    return this.postCategoryService.update(id, updatePostCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postCategoryService.remove(id);
  }
}
