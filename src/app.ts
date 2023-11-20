import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/Modules/student/student.route';
const app: Application = express();

///parser///
app.use(express.json());
app.use(cors());

// all application router here

app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default app;
