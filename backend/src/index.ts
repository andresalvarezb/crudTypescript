import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
