import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';

const swaggerCustomCss = `
.swagger-ui .model-box-control:focus, .swagger-ui .models-control:focus, .swagger-ui .opblock-summary-control:focus {
  outline: none
}
`;

export const setupSwagger = (app: NestExpressApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Future Nation API')
    .setDescription('Future Nation API description')
    .setVersion('v1.0.0')
    .addServer('http://localhost:4000')
    .addServer('http://180.148.214.178:4000')
    .addServer('https://gateway.futurenation.gov.bd/api')
    .addServer('https://gateway.futurenation.gov.bd/api-dev')
    .addBearerAuth(undefined, 'User-Token')
    .addBearerAuth(undefined, 'Authorization')
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) =>
      `${controllerKey}-${methodKey}`.toLowerCase(),
  };

  const document = SwaggerModule.createDocument(app, config, options);
  fs.writeFileSync('./public/swagger-spec.json', JSON.stringify(document));

  const customOptions: SwaggerCustomOptions = {
    customCss: swaggerCustomCss,
    // explorer: true,
    swaggerOptions: {
      persistAuthorization: true,
      validatorUrl: 'https://validator.swagger.io/validator',
    },
  };

  SwaggerModule.setup('api', app, document, customOptions);
};
