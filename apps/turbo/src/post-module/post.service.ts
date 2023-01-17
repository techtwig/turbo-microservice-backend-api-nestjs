import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schema/post.schema';

@Injectable()
export class PostService {
  @InjectModel(Post.name)
  private readonly postDocument: Model<PostDocument>;

  async create(createPostDto: CreatePostDto) {
    try {
      const postObject = new this.postDocument({
        ...createPostDto,
        author_id: 1,
      });
      const savedPost = await postObject.save();
      return savedPost;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAll() {
    try {
      const posts = await this.postDocument.find({}).sort({ createdAt: -1 });
      return { data: posts };
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const posts = await this.postDocument.findById(id);
      if (!posts) {
        throw new NotFoundException('post not found.');
      }
      return { data: posts };
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postDocument.findById(id);
      if (!post) {
        throw new NotFoundException('post not found.');
      }

      await post.update(updatePostDto);
      return {
        data: {
          message: 'post Updated Successfully',
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      await this.postDocument.findByIdAndRemove(id);
      return { data: 'post deleted successfully' };
    } catch (error) {
      throw error;
    }
  }
}
