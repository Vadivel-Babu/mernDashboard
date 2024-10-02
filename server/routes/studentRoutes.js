import { Router } from "express";
import studentControllers from "../controllers/studentControllers.js";

const studentRoutes = Router();

studentRoutes.get("/", studentControllers.getAllStudents);
studentRoutes.get("/:id", studentControllers.getStudent);
studentRoutes.post("/", studentControllers.createStudent);
studentRoutes.delete("/:id", studentControllers.deleteStudent);
studentRoutes.put("/:id", studentControllers.updateStudent);

export default studentRoutes;
