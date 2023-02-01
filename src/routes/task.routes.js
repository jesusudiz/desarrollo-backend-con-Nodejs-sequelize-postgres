const {Router} = require("express");
const router = Router();
const {getTasks,createTask,deleteTask,updateTask,getTask}=require("../controllers/task.controller.js")

router.get("/tasks",getTasks)
router.post("/tasks",createTask)
router.put("/tasks/:id",updateTask)
router.delete("/tasks/:id",deleteTask)
router.get("/tasks/:id",getTask)






module.exports= router;