import { UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AppBaseController } from './app.base.controller';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('Authorization')
export class ProtectedBaseController extends AppBaseController {}
