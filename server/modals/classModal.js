import mongoose from "mongoose";

const ClassSchema = mongoose.Schema({
  name: { type: String, required: true },
  year: { type: String, required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  studentFees: { type: Number, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

export const Class = mongoose.model("Class", ClassSchema);
