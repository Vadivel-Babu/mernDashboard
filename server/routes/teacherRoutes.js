import { Router } from "express";
import teacherControllers from "../controllers/teacherControllers.js";

const teacherRoutes = Router();

teacherRoutes.get("/", teacherControllers.getAllTeachers);
teacherRoutes.get("/:id", teacherControllers.getTeacher);
teacherRoutes.post("/", teacherControllers.createTeacher);
teacherRoutes.delete("/:id", teacherControllers.deleteTeacher);
teacherRoutes.put("/:id", teacherControllers.updateTeacher);

export default teacherRoutes;
