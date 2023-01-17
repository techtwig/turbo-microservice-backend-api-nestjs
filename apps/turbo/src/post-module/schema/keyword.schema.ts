import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type KeywordDocument = HydratedDocument<Keyword>;

@Schema({ collection: 'keywords' })
export class Keyword {
  @Prop({ type: mongoose.Schema.Types.String })
  title: string;
}

export const KeywordSchema = SchemaFactory.createForClass(Keyword).set(
  'timestamps',
  true,
);
