import { Teacher } from "../modals/teacherModal.js";

// Get all teachers
async function getAllTeachers(req, res) {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ message: "Teacher fetched", teachers });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Get a single teacher by ID
async function getTeacher(req, res) {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ message: "Teacher not found" });
    res.json({ message: "Teacher fetched", teacher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Add new teacher
async function createTeacher(req, res) {
  try {
    const newTeacher = req.body;
    const savedTeacher = await Teacher.create(newTeacher);
    res.status(201).json({ message: "Teacher created", savedTeacher });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update teacher
async function updateTeacher(req, res) {
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({ message: "Teacher updated", updatedTeacher });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete teacher
async function deleteTeacher(req, res) {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default {
  getAllTeachers,
  updateTeacher,
  createTeacher,
  deleteTeacher,
  getTeacher,
};
