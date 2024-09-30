// Get all classes
async function getAllClasses(req, res) {
  try {
    // const classes = await Class.find().populate("teacher students");
    res.json({ message: "Class fetched" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Add new class
async function createClass(req, res) {
  // const newClass = new Class(req.body);
  try {
    // const savedClass = await newClass.save();
    res.json({ message: "Class created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Update class
async function updatedClass(req, res) {
  try {
    // const updatedClass = await Class.findByIdAndUpdate(
    //   req.params.id,
    //   req.body,
    //   { new: true }
    // );
    res.json({ message: "Class updated" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

// Delete class
async function deleteClass(req, res) {
  try {
    // await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export default { getAllClasses, createClass, updatedClass, deleteClass };
