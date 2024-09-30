import { Router } from "express";
import classControllers from "../controllers/classControllers.js";

const classRoutes = Router();

classRoutes.get("/", classControllers.getAllClasses);
classRoutes.post("/", classControllers.createClass);
classRoutes.delete("/:id", classControllers.deleteClass);
classRoutes.put("/:id", classControllers.updatedClass);

export default classRoutes;
