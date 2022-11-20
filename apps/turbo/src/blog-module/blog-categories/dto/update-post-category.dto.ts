import { PartialType } from '@nestjs/swagger';

import { CreatePostCategoryDto } from './create-post-category.dto';

export class UpdatePostCategoryDto extends PartialType(CreatePostCategoryDto) {}
