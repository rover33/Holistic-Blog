const dbConnection = require('./index');

var User = dbConnection.sequelize.define('user', {
	user_email: {
		type: dbConnection.Sequelize.STRING,
		allowNull: false
	},
	user_id: {
		type: dbConnection.Sequelize.STRING,
		primaryKey: true,
	},
	admin: {
		type: dbConnection.Sequelize.BOOLEAN,
		allowNull: false
	}
	}, {
	    timestamps: false
	}
);

module.exports = User;