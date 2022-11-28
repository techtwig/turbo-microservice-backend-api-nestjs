import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PostDocument = Post & Document;

@Schema({ collection: 'posts' })
export class Post {
  @Prop({ type: mongoose.Schema.Types.String, default: '' })
  title: string;

  @Prop({ type: mongoose.Schema.Types.String, default: '' })
  description: string;

  @Prop({ type: mongoose.Schema.Types.Array, default: [] })
  keywords: Array<string>;

  @Prop({ type: Number, default: null })
  author_id: number;
}

export const PostSchema = SchemaFactory.createForClass(Post).set(
  'timestamps',
  true,
);
