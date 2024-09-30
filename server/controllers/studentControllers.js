// Get all students
async function getAllStudents(req, res) {
  try {
    // const students = await Student.find().populate("class");
    res.json({ message: "Student dfetched" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Add new student
async function createStudent(req, res) {
  // const newStudent = new Student(req.body);
  try {
    // const savedStudent = await newStudent.save();
    res.json({ message: "Student created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update student
async function updateStudent(req, res) {
  try {
    // const updatedStudent = await Student.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );
    res.json({ message: "Student updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete student
async function deleteStudent(req, res) {
  try {
    // await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default { getAllStudents, createStudent, updateStudent, deleteStudent };
