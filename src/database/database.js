const {Sequelize}= require("sequelize");

const user= "postgres";
const password = "18021123";
const port = "5432";

const sequelize = new Sequelize(`postgres://${user}:${password}@localhost:${port}/project`) // Example for postgres



module.exports= sequelize;