import * as dotenv from 'dotenv';
dotenv.config();

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development';
const CLIENT_HOST: string = process.env.CLIENT_HOST || 'http://localhost:3000';

// author
const AUTHOR: string = process.env.AUTHOR || 'THEATRE';

// application
const PRIMARY_COLOR: string = process.env.PRIMARY_COLOR || '#87e8de';
const DOMAIN: string = process.env.DOMAIN || 'localhost';
const PORT: number = +process.env.PORT || 8080;
const END_POINT: string = process.env.END_POINT || 'graphql';
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10_000;
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3;

// typeorm
const enviroment = {
  main: {
    type: process.env.DATABASE_TYPE,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
  },
};

const TYPEORM_MAIN = enviroment[process.env.DATABASE_MAIN];

// jsonwebtoken
const JWT_SECRET: string = process.env.JWT_SECRET || 'SECRET';
const JWT_REFRESH_SECRET: string =
  process.env.JWT_REFRESH_SECRET || 'refresh-token-key';

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10;

export {
  NODE_ENV,
  CLIENT_HOST,
  AUTHOR,
  PRIMARY_COLOR,
  DOMAIN,
  PORT,
  END_POINT,
  RATE_LIMIT_MAX,
  GRAPHQL_DEPTH_LIMIT,
  JWT_SECRET,
  JWT_REFRESH_SECRET,
  BCRYPT_SALT,
  TYPEORM_MAIN,
};
