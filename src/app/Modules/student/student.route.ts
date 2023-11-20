import express from 'express';
import { studentController } from './student.controller';

const router = express.Router();

router.post('/create-student', studentController.createStudent);
router.get('/', studentController.getstudentData);
router.get('/:studentId', studentController.getSinglestudentData);

export const studentRouter = router;
