import express, { Application, Request, Response } from 'express';

const app: Application = express();
const port: number = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('HomePage');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listing on port ${port}`);
});
