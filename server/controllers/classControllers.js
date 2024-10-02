import { Class } from "../modals/classModal.js";

// Get all classes
async function getAllClasses(req, res) {
  try {
    const classes = await Class.find();
    res.status(200).json({ message: "Class fetched", classes });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function getClass(req, res) {
  try {
    const classData = await Class.findById(req.params.id);
    if (!classData) return res.status(404).json({ message: "Class not found" });
    res.json(classData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Add new class
async function createClass(req, res) {
  try {
    const newClass = req.body;
    const savedClass = await Class.create(newClass);
    res.status(201).json({ message: "Class created", savedClass });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update class
async function updatedClass(req, res) {
  try {
    const updatedClass = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({ message: "Class updated", updatedClass });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete class
async function deleteClass(req, res) {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default {
  getAllClasses,
  createClass,
  updatedClass,
  deleteClass,
  getClass,
};
