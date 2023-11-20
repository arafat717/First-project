import { Request, Response } from 'express';
import { studentService } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await studentService.createStudentIntoBb(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created is successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getstudentData = async (req: Request, res: Response) => {
  try {
    const result = await studentService.getstudentDataFromDB();
    res.status(200).json({
      success: true,
      message: 'Student get is successfull',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSinglestudentData = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentService.getSinglestudentDataFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student get is successfull',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getstudentData,
  getSinglestudentData,
};
