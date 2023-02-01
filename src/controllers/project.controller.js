
const Project = require("../models/Project.js")
const Task = require("../models/Task.js");

const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.send(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


const createProjects = async (req, res) => {
    const { name, priority, description } = req.body;
    try {

        const newProject = await Project.create({
            name: req.body.name,
            priority: req.body.priority,
            description: req.body.description

        })
        res.json(newProject)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body;

        const project = await Project.findByPk(id);
        project.name = name
        project.priority = priority
        project.description = description
        await project.save();
        res.json(project)

    } catch (error) {
        return res.json({ message: error.message })
    }
};
const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.destroy({
            where: {
                id
            }
        })
        res.json({
            message: "fui borrado",
            project: req.body
        })
    } catch (error) {
        res.json({ message: error.message })
    }

};

const getProject = async(req,res)=>{
    try{
      const { id } = req.params;
      const project = await Project.findOne({
        where:{
            id
        }
      })
      if(!project) return res.status(404).json({message:"proyecto inexistente"})
       
      res.json(project);

    }catch ( error){
        return res.status(500).json({message:error.message})
    }
}

const getProjectTasks = async(req,res)=>{
const {id}=req.params;
try{
const tasks = await Task.findAll({
    where:{projectId: id}

})
if(!tasks || !tasks.length) return res.status(404).send("Proyecto sin tareas")

res.json(tasks);
}catch(error){
    return res.status(500).json({message:error.message})
}
}
module.exports = {
    getProjects,
    createProjects,
    deleteProject,
    updateProject,
    getProject,
    getProjectTasks
}