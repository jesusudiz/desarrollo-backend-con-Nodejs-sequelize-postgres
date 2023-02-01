const app = require("./app.js")
const sequelize=require("./database/database.js")



async function  main(){

    try {
        await sequelize.sync({force:false});
        console.log('Connection has been established successfully.');

        app.listen(3001);
        console.log("server is listening on port 3001")
        
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();