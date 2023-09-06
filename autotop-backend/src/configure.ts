import * as dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

export default {
  MONGO_URL: process.env.MONGO_URL,
  SECRET_KEY: process.env.SECRET_KEY,
};

export interface IConfigure {
  MONGO_URL: string;
  SECRET_KEY: string;
}
