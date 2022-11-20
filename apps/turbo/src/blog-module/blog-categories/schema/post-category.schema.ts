import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Schema({ collection: 'post-categories' })
export class PostCategory {
  @Prop()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @Prop()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  slug: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  content: string;
}

export interface PostCategoryDocument extends PostCategory, Document {}

export const PostCategorySchema = SchemaFactory.createForClass(
  PostCategory,
).set('timestamps', true);
