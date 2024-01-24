import express from 'express';

const fileName: any = __filename.match(/\/([^\/]+)\/?$/);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript World!');
});

app.listen(port, () => {
  console.log(fileName[1], ":", `Server is running on port ${port}`);
});
