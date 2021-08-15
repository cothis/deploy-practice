import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

console.log(__dirname);

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(express.static(`${__dirname}/../build/client`));

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new Error('404 Not Found'));
});
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.writeHead(404, err.message);
  res.end(err.message);
});

app.listen(3000, () => {
  console.log('http://localhost:3000 server started');
});
