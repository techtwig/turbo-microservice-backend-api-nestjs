import { ApiProperty } from '@nestjs/swagger';

export class CreatePostCategoryDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  content: string;
}
