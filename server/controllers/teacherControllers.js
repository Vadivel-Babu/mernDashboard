// Get all teachers
async function getAllTeachers(req, res) {
  try {
    // const teachers = await Teacher.find().populate("assignedClass");
    res.json({ message: "Teacher fetched" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Add new teacher
async function createTeacher(req, res) {
  // const newTeacher = new Teacher(req.body);
  try {
    // const savedTeacher = await newTeacher.save();
    res.json({ message: "Teacher created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update teacher
async function updateTeacher(req, res) {
  try {
    // const updatedTeacher = await Teacher.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );
    res.json({ message: "Teacher updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete teacher
async function deleteTeacher(req, res) {
  try {
    // await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: "Teacher deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default { getAllTeachers, updateTeacher, createTeacher, deleteTeacher };
