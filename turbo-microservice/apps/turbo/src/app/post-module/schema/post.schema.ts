import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

import { Keyword } from './keyword.schema';

export type PostDocument = HydratedDocument<Post>;

@Schema({ collection: 'posts' })
export class Post {
  @Prop({ type: mongoose.Schema.Types.String, default: '' })
  title: string;

  @Prop({ type: mongoose.Schema.Types.String, default: '' })
  description: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Keyword.name }],
  })
  keywords: Keyword[];

  @Prop({ type: Number, default: null })
  author_id: number;
}

export const PostSchema = SchemaFactory.createForClass(Post).set(
  'timestamps',
  true,
);
