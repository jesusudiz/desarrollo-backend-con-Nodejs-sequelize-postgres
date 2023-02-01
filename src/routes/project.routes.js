const { Router }= require("express");
const {getProjects,createProjects,deleteProject,updateProject,getProject,getProjectTasks}=require("../controllers/project.controller.js")

const router = Router();



router.get("/projects",getProjects);
router.post("/projects",createProjects);
router.put("/projects/:id",updateProject);
router.delete("/projects/:id",deleteProject);
router.get("/projects/:id",getProject);
router.get("/projects/:id/tasks",getProjectTasks);

module.exports=router;