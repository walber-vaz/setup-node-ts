import express from 'express';
import { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.listen(3333, () => {
  console.log('listing on port: 3333');
});
