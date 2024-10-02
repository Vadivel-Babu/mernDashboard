import express, { json } from "express";
import cors from "cors";
import classRoutes from "./routes/classRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import "dotenv/config";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./db/db.js";

const app = express();

const port = process.env.PORT || 5000;

connectDB();
app.use(cors({ credentials: true }));
app.use(json());

app.get("/", (req, res) => {
  res.json({ api: "working.." });
});

app.use("/api/class", classRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/student", studentRoutes);

app.listen(port, () => {
  console.log(`listen in ${port}`);
});
