import express from 'express';
import dotenv from 'dotenv';
import { logger } from './logger';

const fileName: any = __filename.match(/\/([^\/]+)\/?$/);
dotenv.config();

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript World!');
});

app.listen(port, () => {
  console.log(fileName[1], ":", `Server is running on port ${port}`);

  logger.info("hello world");
  logger.error("hello world");
  logger.warn("hello world");
  logger.debug("hello world");
  logger.verbose("hello world");
  logger.silly("hello world");

  logger.info('naver profile : ', { message: "hello world~~" });
});
