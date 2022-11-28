import { Injectable, NotFoundException } from '@nestjs/common';
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
      const postCategoryObject = new this.postCategoryDocument({
        ...createPostCategoryDto,
        user_id: 1,
      });
      const savedPostCategory = await postCategoryObject.save();
      return savedPostCategory;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      const postCategories = await this.postCategoryDocument
        .find({})
        .sort({ createdAt: -1 });
      return { data: postCategories };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const postCategory = await this.postCategoryDocument.findById(id);
      if (!postCategory) {
        throw new NotFoundException('post category not found.');
      }
      return { data: postCategory };
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatePostCategoryDto: UpdatePostCategoryDto) {
    try {
      const postCategory = await this.postCategoryDocument.findById(id);
      if (!postCategory) {
        throw new NotFoundException('post not found.');
      }

      await postCategory.update(updatePostCategoryDto);
      return {
        data: {
          message: 'post category Updated Successfully',
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.postCategoryDocument.findByIdAndRemove(id);
      return { data: 'post category deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
