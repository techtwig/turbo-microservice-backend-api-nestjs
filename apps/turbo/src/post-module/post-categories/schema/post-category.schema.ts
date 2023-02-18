import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
