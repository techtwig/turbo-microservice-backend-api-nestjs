import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBlogCategoryDto } from './dto/create-blog-category.dto';
import { UpdateBlogCategoryDto } from './dto/update-blog-category.dto';
import {
  BlogCategory,
  BlogCategoryDocument,
} from './schema/blog-category.schema';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel(BlogCategory.name)
    private readonly blogCategoryModel: Model<BlogCategoryDocument>,
  ) {}

  async create(createBlogCategoryDto: CreateBlogCategoryDto) {
    try {
      console.log('this.blogCategoryModel', this.blogCategoryModel);
      await this.blogCategoryModel.create(createBlogCategoryDto);
      return { success: true };
    } catch (e) {
      console.log('e', e);
      return { success: false };
    }
  }

  async findAll() {
    return this.blogCategoryModel.find();
  }

  async findOne(id: number) {
    return this.blogCategoryModel.findById(id);
  }

  update(id: number, updateBlogCategoryDto: UpdateBlogCategoryDto) {
    return this.blogCategoryModel.findByIdAndUpdate(updateBlogCategoryDto);
  }

  remove(id: number) {
    return this.blogCategoryModel.findByIdAndDelete(id);
  }
}
