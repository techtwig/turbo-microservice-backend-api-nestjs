import * as Joi from 'joi';

export const appConfig = {
  isGlobal: true,
  validationSchema: Joi.object({
    ENVIRONMENT: Joi.string().required(),
    PGSQL_DB_HOST: Joi.string().required(),
    PGSQL_DB_PORT: Joi.string().required(),
    PGSQL_DB_USERNAME: Joi.string().required(),
    // PGSQL_DB_PASSWORD: Joi.string().required(),
    PGSQL_DB_DATABASE: Joi.string().required(),
    MONGODB_URI: Joi.string().required(),
    // EMAIL_HOST: Joi.string().required(),
    // EMAIL_USER: Joi.string().required(),
    // EMAIL_PASSWORD: Joi.string().required(),
  }),
};
