import { Sequelize } from "sequelize";


const sequelize = new Sequelize('Social_Media_db', 'postgres', 'kingmaker18', {
    host: 'localhost',
    dialect: 'postgres' 
  });

  const dbCon = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  
  
  export default sequelize;
  export{dbCon};