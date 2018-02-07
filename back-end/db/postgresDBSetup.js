let dbConnection = require('../models/index');
dbConnection.sequelize.sync({force: true}).then(() => {
	process.exit(0)
});