import { Student } from "../modals/studentModal.js";

// Get all students
async function getAllStudents(req, res) {
  try {
    const students = await Student.find();
    res.status(200).json({ message: "Student dfetched", students });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Add new student
async function createStudent(req, res) {
  try {
    const newStudent = req.body;
    const savedStudent = await Student.create(newStudent);
    res.status(201).json({ message: "Student created", savedStudent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update student
async function updateStudent(req, res) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({ message: "Student updated", updatedStudent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete student
async function deleteStudent(req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default { getAllStudents, createStudent, updateStudent, deleteStudent };
