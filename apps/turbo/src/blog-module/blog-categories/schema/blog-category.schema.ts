import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Schema()
export class BlogCategory {
  @Prop()
  @IsNumber()
  @IsNotEmpty()
  parent_id: number;

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

export interface BlogCategoryDocument extends BlogCategory, Document {}

export const BlogCategorySchema = SchemaFactory.createForClass(
  BlogCategory,
).set('timestamps', true);
