import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Schema({ collection: 'post-categories' })
export class PostCategory {
  @Prop()
  id: number;

  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop()
  content: string;
}

export interface PostCategoryDocument extends PostCategory, Document {}

export const PostCategorySchema = SchemaFactory.createForClass(
  PostCategory,
).set('timestamps', true);
