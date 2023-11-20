import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoBb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getstudentDataFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSinglestudentDataFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentService = {
  createStudentIntoBb,
  getstudentDataFromDB,
  getSinglestudentDataFromDB,
};
