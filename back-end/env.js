const Sequelize = require('sequelize');
let sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://miladabujarada@localhost:5432/holistic'); 
module.exports = sequelize;
module.exports = Sequelize;
//localDb=