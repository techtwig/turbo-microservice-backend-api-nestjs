import { UseFilters } from '@nestjs/common';

import { AllExceptionFilter } from '../exception-filters/all-exception.filter';

@UseFilters(new AllExceptionFilter())
export class AppBaseController {}
