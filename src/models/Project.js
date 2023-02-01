const { DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Task = require("./Task.js")

const Project = sequelize.define("projects", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description: {
        type: DataTypes.STRING
    },
}, {
    timestamps:false
});

Project.hasMany(Task,{
    foreingKey:"projectId",
    sourcekey:"id"
})

Task.belongsTo(Project,{
    foreingKey:"projectId",
    targetId:"id"
})
module.exports=Project;