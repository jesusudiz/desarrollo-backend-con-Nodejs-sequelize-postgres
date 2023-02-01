const express= require("express")
const projectRoutes= require("./routes/project.routes.js")
const tasksRoutes = require("./routes/task.routes.js");

const app = express();
//middlewares
app.use(express.json());
//importacion de las rutas
app.use(projectRoutes);
app.use(tasksRoutes);

module.exports = app;
