import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  contact: { type: String, required: true },
  salary: { type: Number, required: true },
  assignedClass: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
});

export const Teacher = mongoose.model("Teacher", TeacherSchema);
