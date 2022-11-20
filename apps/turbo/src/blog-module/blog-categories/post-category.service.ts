import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostCategoryDto } from './dto/create-post-category.dto';
import { UpdatePostCategoryDto } from './dto/update-post-category.dto';
import {
  PostCategory,
  PostCategoryDocument,
} from './schema/post-category.schema';

@Injectable()
export class PostCategoryService {
  @InjectModel(PostCategory.name)
  private readonly postCategoryDocument: Model<PostCategoryDocument>;

  async create(createPostCategoryDto: CreatePostCategoryDto) {
    try {
      await this.postCategoryDocument.create(createPostCategoryDto);
      return { success: true };
    } catch (e) {
      console.log('e', e);
      return { success: false };
    }
  }

  async findAll() {
    return this.postCategoryDocument.find();
  }

  async findOne(id: number) {
    return this.postCategoryDocument.findById(id);
  }

  update(id: number, updatePostCategoryDto: UpdatePostCategoryDto) {
    return this.postCategoryDocument.findByIdAndUpdate(updatePostCategoryDto);
  }

  remove(id: number) {
    return this.postCategoryDocument.findByIdAndDelete(id);
  }
}
